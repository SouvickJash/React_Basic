import React, { useState, useEffect } from "react";
const UserData = () => {
  const [user, setUser] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const getUser = async () => {
    const res = await fetch(`${baseUrl}/photos`);
    const UserData = await res.json();
    setUser(UserData);
  };
  useEffect(() => {
    getUser();
  }, []);
  

  return (
    <>
      <div class="container">
        <div class="row">
          {user.map((item, index) => {
            return (
              <>
                <div class="col-sm">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{item.id}</h5>
                      <h5 className="card-title">{item.title}</h5>
                      <h5 className="card-title">{item.id}</h5>
                      <h5 className="card-title">{item.id}</h5>

                      <div>
                 </div>

                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default UserData;
