import React from "react";
import ResponsiveDrawer from "../../../components/Drawer/Drawer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllProducts = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await axios.get("http://localhost:3001/getProducts", {
        withCredentials: true,
      });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ResponsiveDrawer AllProducts={1}>
      <div className="d-flex justify-content-center align-items-center h1">
        All Products
      </div>
    </ResponsiveDrawer>
  );
};

export default AllProducts;
