import React, { useContext, useState } from "react";
import CreateContexts1 from "./Context/CreateContext1";
// import { useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

const Result = () => {
  const user = useContext(CreateContexts1);
  // const [loding,setLoading]=useState(false)
  console.log(user);
  
  // useEffect(()=>{
  //     setLoading(true)
  //     setTimeout(()=>{
  //       setLoading(false)
  //     },3000)
  // },[])
  return (
    <>
    {/* {
      loding?
      <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    } */}
      <h2>This is result page</h2>
      <div class="container">
        <div class="row">
          {
            user.map((item)=>{
              return(
                <>
                  <div class="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.thumbnailUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
                </>
              )
            })
          }
        
        </div>
      </div>
    </>
  );
};

export default Result;

//clase/component/lifecycle/reduce
