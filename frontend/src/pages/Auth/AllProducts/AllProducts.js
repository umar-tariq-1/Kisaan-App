import React from "react";
import ResponsiveDrawer from "../../../components/Drawer/Drawer";

const AllProducts = () => {
  return (
    <ResponsiveDrawer AllProducts={1}>
      <div className="d-flex justify-content-center align-items-center h1">
        All Products
      </div>
    </ResponsiveDrawer>
  );
};

export default AllProducts;
