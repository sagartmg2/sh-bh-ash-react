import React, { useEffect, useState } from "react";
import Input from "../../components/common/Input";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../../constants/domain";

export default function UpsertProduct() {
  const { _id } = useParams();

  // const [name, setName] = useState("");
  // const [description, setdescription] = useState("second");
  // const [price, setprice] = useState(0);
  // const [inStock, setinStock] = useState(0);

  let initialValue = {
    name: "",
    price: "",
    description: "",
    in_stock: "",
    categories: ["cat-1", ""],
  };
  const [data, setData] = useState(initialValue);

  const [isSubmitting, setisSubmitting] = useState(false);
  const [errors,setErros] = useState({
    name:"this field required"
  });

  useEffect(() => {
    if (_id) {
      axios
        .get(`${API_URL}/products/${_id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          toast.error("something went wrong please try again.");
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let productData = data;
    let access_token = localStorage.getItem("access_token");

    setisSubmitting(true);
    axios
      .post(
        "https://ecommerce-sagartmg2.vercel.app/api/products",
        productData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      )
      .then((res) => {
        setisSubmitting(false);
        toast("product created.");
        setData(initialValue);
      })
      .catch((err) => {
        setisSubmitting(false);
        toast.error("something went wrong");
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleCategoychange = () => {};

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
            onChange={handleChange}
            name="name"
            className="form-control"
            type="text"
            placeholder="Name"
          />
          <span className="text-red-500 text-sm">this field is required : Try this</span>
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label required-field">
            price
          </label>
          <input
            value={data.price}
            onChange={handleChange}
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
            value={data.in_stock}
            onChange={handleChange}
            name="in_stock"
            className="form-control"
            type="number"
            placeholder="in-stock"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Category{" "}
            <button type="button" className="btn-sm">
              Add
            </button>
          </label>
          <div className="flex">
            <input className="form-control inline w-auto" />{" "}
            <button className="btn-sm">delete</button>
          </div>
        </div>
       
        <div className="form-group col-span-3">
          <label htmlFor="" className="form-label">
            description
          </label>
          <textarea
            value={data.description}
            onChange={handleChange}
            name="description"
            className="form-control"
            type="number"
            placeholder="description"
          />
        </div>
      </div>
      <button
        disabled={isSubmitting}
        className="btn disabled:cursor-no-drop disabled:opacity-50 "
      >
        {isSubmitting ? "loading..." : "submit"}
      </button>
      {/* <Input name={"name"}/>
      <Input name={"price"} type="number"/> */}
    </form>
  );
}
