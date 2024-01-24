import React, { useEffect, useState } from "react";
import Input from "../../components/common/Input";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpsertProduct() {
  /*  */
  const { _id } = useParams();

  // const [name, setName] = useState("");
  // const [description, setdescription] = useState("second");
  // const [price, setprice] = useState(0);
  // const [inStock, setinStock] = useState(0);

  const [data, setData] = useState({
    name: "watch",
    price: 0,
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let productData = {
      name: e.target.name.value,
      price: e.target.price.value,
    };
    let access_token = localStorage.getItem("access_token");

    // let method = "post"
    // if(_id){
    //   method = "put"
    // }

    axios.post(
      "https://ecommerce-sagartmg2.vercel.app/api/products",
      productData,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
  };
  useEffect(() => {
    if (_id) {
      // setName("watch");
    }
  }, []);

  return (
    <form className="container mt-5 max-w-[700px] " onSubmit={handleSubmit}>
      Edit Product {JSON.stringify(_id)}
      <div className="grid gap-x-4 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
        <div className="form-group">
          <label htmlFor="" className="form-label required-field">
            Name
          </label>
          <input
            value={data.name}
            onChange={(e) => {
              setData({name:e.target.value});
            }}
            name="name"
            className="form-control"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label required-field">
            price
          </label>
          <input
            value={data.price}
            onChange={(e) => {
              setData({price:e.target.value});
            }}
            name="price"
            className="form-control"
            type="number"
            placeholder="Price"
          />
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
