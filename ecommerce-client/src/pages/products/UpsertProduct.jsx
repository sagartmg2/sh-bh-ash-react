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
    categories: [""],
    image: null,
  };
  const [data, setData] = useState(initialValue);

  const [isSubmitting, setisSubmitting] = useState(false);
  const [validationError, setErros] = useState({});

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

  // let categories = ["one", "two", "three"];
  // function changeCategoryValue(index, newValue) {
  //   // code here
  //   // let temp = [...categories]
  //   // temp[index] = newValue
  //   return categories.map((el,idx) =>{
  //     if(index == idx){
  //       return newValue
  //     }
  //     return el
  //   })
  // }

  // console.log("outpu",changeCategoryValue(1, "category-one"));

  const handleSubmit = (e) => {
    e.preventDefault();
    let access_token = localStorage.getItem("access_token");

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image);
    data.categories.forEach((cat) => {
      formData.append("categories", cat);
    });
    setisSubmitting(true);
    let url = "https://ecommerce-sagartmg2.vercel.app/api/products";
    let method = "post";
    if (_id) {
      method = "put";
      url = "https://ecommerce-sagartmg2.vercel.app/api/products/" + _id;
    }
    axios[method](url, formData, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        setisSubmitting(false);
        if (!_id) {
          toast("product created.");
          setData(initialValue);
        } else {
          toast("product updated.");
        }
      })
      .catch((err) => {
        setisSubmitting(false);
        if (err.response?.status == 400) {
          let errObj = {};
          err.response.data.errors.forEach((el) => {
            errObj[el.param] = el.msg;
          });
          console.log(errObj);
          setErros(errObj);
        }
        console.log(err.response.data);
        toast.error("something went wrong");
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type == "file" ? e.target.files[0] : e.target.value,
    });
  };
  const handleCategoychange = (e, index) => {
    let temp = data.categories.map((el, idx) => {
      if (index == idx) {
        return e.target.value;
      }
      return el;
    });

    setData({
      ...data,
      categories: temp,
    });
  };

  const addCategory = () => {
    // let temp = data.categories // this is wrong // reference is stored in temp //  ["cat-1","cat-2"]
    let temp = [...data.categories]; // ["cat-1","cat-2"]
    temp.push("");

    // temp// ["cat-1","cat-2",""]
    setData({
      ...data,
      // categories:[...data.categories,""], // this is also wring
      categories: temp,
    });
  };

  const deleteCategory = (index) => {
    let temp = [...data.categories]; //["cat-1","cat-2",]
    temp.splice(index, 1);
    setData({
      ...data,
      categories: temp,
    });
  };

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
          {validationError.name && (
            <span className="text-sm text-red-500">{validationError.name}</span>
          )}
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
          {validationError.price && (
            <span className="text-sm text-red-500">
              {validationError.price}
            </span>
          )}
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
            <button onClick={addCategory} type="button" className="btn-sm">
              Add
            </button>
          </label>
          {/* ["cat1","cat2"] */}
          {data.categories.map((el, index) => {
            return (
              <div className="my-2 flex">
                <input
                  value={el}
                  className="form-control inline w-auto"
                  onChange={(e) => {
                    handleCategoychange(e, index);
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    deleteCategory(index);
                  }}
                  className="btn-sm"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>

        <div className="form-group col-span-3">
          <label htmlFor="" className="form-label">
            Image
          </label>
          <input
            // onChange={(e) =>{
            //   console.log(e.target.files[0]);
            //   setData({
            //     ...data,
            //     image:e.target.files[0]
            //   })

            // }}
            onChange={handleChange}
            type="file"
            name="image"
            className="form-control"
          />
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
        {isSubmitting ? "loading..." : _id ? "edit" : "store"}
      </button>
      {/* <Input name={"name"}/>
      <Input name={"price"} type="number"/> */}
    </form>
  );
}
