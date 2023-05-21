import React, { useState, useEffect } from "react";

const UserData = () => {
  const [user, setUser] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const getUser = async () => {
    const res = await fetch(`${baseUrl}/users`);
    const UserData = await res.json();
    setUser(UserData);
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

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
                      <h5 className="card-title">{item.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">phone: {item.phone}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">email: {item.email}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">website: {item.website}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">username: {item.username}</h6>
                      <div>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
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
