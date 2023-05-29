import React, { useContext } from "react";
import CreateContexts1 from "./Context/CreateContext1";

const Result = () => {
  const user = useContext(CreateContexts1);
  console.log(user);
  

  return (
    <>
      <h1>Data use fatch from context</h1>
     
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
