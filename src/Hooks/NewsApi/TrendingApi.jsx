import axios from "axios";
import React, { useEffect, useState } from "react";
import {SyncLoader} from 'react-spinners'

const TrendingApi = () => {
  const [user, setUser] = useState([]);
  const [loadmore,setLodemore] = useState(3);
  const [load,setLoad] = useState(true)
  const loading=()=>{
       setLodemore(loadmore+3)
  }
  const baseUrl =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-04-21&sortBy=publishedAt&apiKey=da922dc665fb40a88efac632d6a15a7a";
  const getDetais = async () => {
    const result = await axios.get(baseUrl);
    setUser(result?.data.articles);
    setLoad(false)
  };
  useEffect(() => {
    getDetais();
  });
  if(load){
    return(
      <>
         <SyncLoader color="#36d7b7" />
      </>
    )
  }
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
                <h5 className="card-title">{item.title}</h5>
                <a href={item.url} class="btn btn-primary" style={{marginLeft:"60px", marginTop:"10px"}}>Go somewhere</a>
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
