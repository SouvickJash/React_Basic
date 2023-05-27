import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import Products from '../Pages/Products'

const Product = () => {
  const [product, setProduct] = useState([]);
  const getApi = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await axios.get(`${url}`);
    setProduct(response?.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log(product);
  return (
    <>
      <h1>This is a product page</h1>
      <div class="container">
        <div class="row">
         {
            product.map((item, index) =>{
                 return (
                  <>
                      <div class="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="..." />
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

      {/* <Products data={Product}/> */}
    </>
  );
};

export default Product;
