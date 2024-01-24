import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/domain";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SellerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let access_token = localStorage.getItem("access_token");

    axios
      .get(`${API_URL}/products?sellerproducts`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);
  return (
    <div className="container">
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-2 px-4 py-2">Name</th>
            <th className="border-2 px-4 py-2">price</th>
            <th className="border-2 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td className="border-2 px-4 py-2">{product.name}</td>
                <td className="border-2 px-4 py-2">{product.price}</td>
                <td className="border-2 px-4 py-2 flex items-center gap-3">
                    <Link to={`/products/edit/${product._id}`}>
                    <CiEdit/>
                    </Link>
                     <FaTrash />
                    </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
