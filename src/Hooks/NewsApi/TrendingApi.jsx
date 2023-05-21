import axios from "axios";
import React, { useEffect, useState } from "react";

const TrendingApi = () => {
  const [user, setUser] = useState([]);
  const [loadmore,setLodemore] = useState(3);
  const loading=()=>{
       setLodemore(loadmore+3)
  }
  const baseUrl =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-04-21&sortBy=publishedAt&apiKey=da922dc665fb40a88efac632d6a15a7a";
  const getDetais = async () => {
    const result = await axios.get(baseUrl);
    setUser(result?.data.articles);
  };
  useEffect(() => {
    getDetais();
  });
  console.log(user);
  return (
    <>
      {/* {
         user.map((item, index)=>{
             return(
               <>
                  {item.source.id}
               </>
             )
         })
       } */}
      <div className="container">
        <div className="row">
         {
            user.slice(0,loadmore).map((item, index)=>{
               return(
                  <>
            <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.source.id}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={item.url} class="btn btn-warning" style={{marginLeft:"60px", marginTop:"10px"}}>Go somewhere</a>
              </div>
            </div>
          </div>
                  </>
               )
            })
         }
        
        </div>
      </div>
      <button type="button" class="btn btn-danger" onClick={loading} style={{marginLeft:"560px", marginTop:"37px"}}>Click more...</button>
    </>
  );
};

export default TrendingApi;
