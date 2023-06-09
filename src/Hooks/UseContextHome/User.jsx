import React, { useContext, useState } from "react";
import CreateContaxt2 from "./NewContext/CreateContaxt2";
import { ScaleLoader } from "react-spinners";

const User = () => {
  const { user } = useContext(CreateContaxt2);
  const [loading, setLoading] = useState(true);
  //loading page
  const [load, setLoad] = useState(3);
  const loader = () => {
    setLoad(load + 3);
  };

  // console.log(user);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <>
        <div className="spinner">
          <ScaleLoader color="#0c55d4" size={100} />
        </div>
      </>
    );
  }
  return (
    <>
      <h1>user page</h1>
      <div class="container">
        <div class="row">
          {
           user.slice(0,load).map((item,index) => {
            return (
              <>
                <div class="col-sm">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="immg">
                    <img src={item.thumbnailUrl} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body">
                     <p>
                     <p className="card-title">id:{item.id}</p>
                      <p className="card-title">title:{item.title}</p>
                     </p>
                      <a href="#" className="btn btn-primary" style={{marginLeft:"60px"}}>
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <button type="button" class="btn btn-danger" onClick={loader} style={{marginLeft:"560px", marginTop:"30px"}}>Click more...</button>











      {/* another acrd */}
    
      {/* <div class="col">
        {
          user.map((item)=>{
            return(<>
 <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">${'{'}card.header}}</div>
  <div className="card-body">
    <h5 className="card-title">${'{'}card.title{'}'}</h5>
    <p className="card-text">${'{'}card.text{'}'}</p>
  </div>
</div>
</>)
          })
        }
      
    </div> */}


    </>
  );
};

export default User;
