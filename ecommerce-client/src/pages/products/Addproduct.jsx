import React from "react";
import Input from "../../components/common/Input";
import axios from "axios";

export default function Addproduct() {
  /*  */

  const handleSubmit = (e) => {
    e.preventDefault();
    let productData = {
      name:"from axios",
      price:1000,
    }
    let access_token = localStorage.getItem("access_token");

    axios.post("https://ecommerce-sagartmg2.vercel.app/api/products",productData,{
      headers:{
        Authorization:`Bearer ${access_token}`
      }
    })

  };

  return (
    <form className="container mt-5 " onSubmit={handleSubmit}>
      <div className="grid gap-x-4 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
        <div className="form-group">
          <label htmlFor="" className="form-label required-field">
            Name
          </label>
          <input className="form-control" type="text" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label required-field">
            price
          </label>
          <input className="form-control" type="number" placeholder="Price" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            in-stock
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="in-stock"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            description
          </label>
          <textarea
            className="form-control"
            type="number"
            placeholder="description"
          />
        </div>
      </div>
      <button className="btn">submit</button>

      {/* <Input name={"name"}/>
      <Input name={"price"} type="number"/> */}
    </form>
  );
}
