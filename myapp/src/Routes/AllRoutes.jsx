import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Component/Home";
import { Login } from "../Component/Login";
import { Signup } from "../Component/Signup";

import { Link, useNavigate } from "react-router-dom";
import AllProduct from "../Component/AllProduct";
import Profile from "../Component/Profile";
import Cart from "../Component/Cart";
import CodeChallenge from "../Component/CodeChallenge";

export const AllRoutes = () => {
  const navigate = useNavigate();
  const [token, settoken] = React.useState(null);
  const ProtectedRoute = ({ token, children }) => {
    const Dashboard = () => {
      if (!token) {
        alert("Please Login First");
        navigate("/");
      }
    };
  };

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/codechallenge" element={<CodeChallenge />} />
    </Routes>
  );
};
