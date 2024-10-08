import React from "react";
import ResponsiveDrawer from "../../../components/Drawer/Drawer";

const Profile = () => {
  return (
    <ResponsiveDrawer active={{ Profile: true }}>
      <div className="d-flex justify-content-center align-items-center h1">
        Profile
      </div>
    </ResponsiveDrawer>
  );
};

export default Profile;
