import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAllUsers } from "../Api/Api";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let response = await getAllUsers();
    //  console.log(response)
    setUsers(response?.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log("data", users);
  return (
    <>
      <div className="container">
        <h2>User details</h2>
        <Link to="/adduser" className="btn btn-primary">
          Add User
        </Link>
        <p></p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">city</th>
              <th scope="col">phone</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{item.name}</th>
                    <td>{item.email}</td>
                    <td>{item.city}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Link to="/" className="btn btn-success">
                        Update
                      </Link>
                    </td>
                    <td>
                      <Link to="/" className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
