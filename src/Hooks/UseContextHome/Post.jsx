import React, { useContext, useState } from "react";
import CreateContaxt2 from "./NewContext/CreateContaxt2";
import { ScaleLoader } from "react-spinners";

const User = () => {
  const { post } = useContext(CreateContaxt2);
  const [loading, setLoading] = useState(true);
  //loading page
  const [load, setLoad] = useState(6);
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
      <h1>post page</h1>
      <div class="container">
        <div class="row">
          {post.map((item) => {
            return (
              <>
                <div class="col-sm">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">POST PAGE</h5>
                      <p className="card-text">Userid: {item.userId}</p>
                      <p className="card-text">Title: {item.title}</p>
                      <a href="#" className="btn btn-primary">
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
      <button
        type="button"
        class="btn btn-danger"
        onClick={loader}
        style={{ marginLeft: "560px", marginTop: "30px" }}
      >
        Click more...
      </button>
    </>
  );
};

export default User;
