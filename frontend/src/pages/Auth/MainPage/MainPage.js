import React from "react";

import ResponsiveDrawer from "../../../components/Drawer/Drawer";
import Dashboard from "../Dashboard/Dashboard";
import AllProducts from "../AllProducts/AllProducts";
import MyProducts from "../MyProducts/MyProducts";
import Settings from "../Settings/Settings";
import MyProfile from "../MyProfile/MyProfile";
import Categories from "../Categories/Categories";

const MainPage = () => {
  return (
    <ResponsiveDrawer
      Dashboard={<Dashboard />}
      AllProducts={<AllProducts />}
      MyProducts={<MyProducts />}
      Settings={<Settings />}
      MyProfile={<MyProfile />}
      Categories={<Categories />}
    />
  );
};

export default MainPage;
