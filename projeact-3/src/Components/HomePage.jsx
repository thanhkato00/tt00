import React, { useEffect, useState } from "react";
import Navbars from "./Navbars/Navbars";
import axios from "axios";

import { useAuth } from "./auth-context";
import Product from "./Product/Product";
import Button from "react-bootstrap/Button";
function HomePage() {
  const { user, login } = useAuth();

  const [state, setState] = useState([]);
  const url = "http://localhost:8000/product";

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      login(savedUser); // Đăng nhập lại nếu có thông tin người dùng
    }

    // Gọi lại API để lấy thông tin sản phẩm
    axios
      .get(url)
      .then((response) => setState(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbars />
      <div
        style={{ marginLeft: "25rem", padding: "2rem", fontSize: "1rem" }}
      ></div>
      <Product state={state} />
    </div>
  );
}

export default HomePage;
