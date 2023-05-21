import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowLoading = () => {
  const [single, setSingle] = useState({});
  const baseURL = "https://api.github.com/users";
  const { id } = useParams();
  const getSingle = async () => {
    const response = await axios.get(`${baseURL}/${id}`);
    setSingle(response.data);
  };
  useEffect(() => {
    getSingle();
  });
  return (
    <>
      {/* <div class="card">
  <div class="card-body">
   <p>Name:{single.name}</p> 
  </div>
</div> */}
      <div
        className="card text-white bg-primary mb-3"
        style={{ maxWidth: "18rem"}}
      >
        <div className="card-header">{single.name}</div>
        <div className="card-body">
          <h5 className="card-title">id:{single.id}</h5>
        
        </div>
      </div>
    </>
  );
};

export default ShowLoading;
