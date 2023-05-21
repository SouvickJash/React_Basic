import axios from "axios";
import React, { useEffect, useState } from "react";


const News = () => {
  const [news, setNews] = useState([]);
  const [loadmore,setLoadMore] = useState(3);
  const [loding,setLoding] = useState()
  const loading=()=>{
    // setLoadMore((Value)=>Value*2) 
    setLoadMore(loadmore+3);
  }
  //https://newsapi.org/v2/everything?q=india&apiKey=f2b86ca3d3ac43d689830404d4545385
  const url ='https://newsapi.org/v2/everything?q=tesla&from=2023-04-21&sortBy=publishedAt&apiKey=da922dc665fb40a88efac632d6a15a7a'
    
  const getapi = async () => {
    const response = await axios.get(url);
    setNews(response?.data.articles);
  };
  useEffect(() => {
    getapi();
  }, []);
  console.log(news);
  return (
    <>
      {/* {
        news.map((item)=>{
          return(
            <>
               {item.source.id}
            </>
          )
        })
      } */}

      <div class="container">
        <div class="row">
          {
             news.slice(0,loadmore).map((item)=>{
              return(
            <>
              <div class="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title">{item.title}</h5>
                <a href={item.url} class="btn btn-primary" style={{marginLeft:"60px", marginTop:"10px"}}>Go somewhere</a>
                {/* <h5 className="card-title">{item.source.author}</h5> */}
          
                {/* <button href={item.url} type="button" class="btn btn-danger" style={{marginLeft:"60px", marginTop:"10px"}}>Go Somewhere</button> */}
                
             
                
              </div>
            </div>
          </div>
                </>
              )
            })
          }
        
        </div>
      </div>
      {/* <button type="button" class="btn btn-danger" onClick={loading} style={{marginLeft:"560px", marginTop:"37px"}}>Click more...</button> */}
      <button type="button" class="btn btn-danger" onClick={loading} style={{marginLeft:"560px", marginTop:"37px"}}>Click more...</button>
    </>
  );
};

export default News;
