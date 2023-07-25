import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { FiMenu } from "react-icons/fi";
import { IoStorefrontOutline } from "react-icons/io5";
import CustomListItem from "./CustomListItem";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { BsBasketFill, BsBasket3Fill } from "react-icons/bs";

// import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState({ dashboard: true });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    if (mobileOpen) {
      setTimeout(function () {
        setMobileOpen(false);
      }, 95);
    }
  };

  // const navigate = useNavigate();

  const drawer = (
    <div
      style={{ fontFamily: "Titillium Web, sans-serif" }}
      className="text-secondary"
    >
      <Toolbar />
      <Divider />
      <List>
        <CustomListItem
          text="Dashboard"
          active={active.dashboard}
          icon={<MdDashboard />}
          handleClick={() => {
            setActive({ dashboard: true });
            // navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="All Products"
          active={active.allProducts}
          icon={<BsBasket3Fill />}
          handleClick={() => {
            setActive({ allProducts: true });
            // navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="Categories"
          active={active.categories}
          icon={<FaListUl size={22} />}
          handleClick={() => {
            setActive({ categories: true });
            // navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="My Products"
          active={active.myProduct}
          icon={<BsBasketFill />}
          handleClick={() => {
            setActive({ myProduct: true });
            // navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="My Profile"
          active={active.myProfile}
          icon={<CgProfile />}
          handleClick={() => {
            setActive({ myProfile: true });
            // navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="Settings"
          active={active.settings}
          icon={<IoSettingsOutline />}
          handleClick={() => {
            setActive({ settings: true });
            // navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="Logout"
          active={active.logout}
          icon={<TbLogout size={26} />}
          handleClick={() => {
            setActive({ logout: true });
            // navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          background: "#1b854a",
          height: "66px",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="rgb(33, 37, 41)"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: "2px", mr: 2, display: { md: "none" } }}
          >
            <FiMenu size={48} />
          </IconButton>

          <div className="d-none d-lg-flex mt-2 ms-5">
            <IoStorefrontOutline color="rgb(33, 37, 41)" size={40} />
            <h2
              style={{
                fontFamily: "Titillium Web, sans-serif",
                color: "rgb(33, 37, 41)",
              }}
              className="h2 ms-3"
            >
              KisaanApp Store
            </h2>
          </div>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: { xs: "8px", sm: "0px" },
              height: { xs: "calc(100% - 8px)", sm: "calc(100% - 0px)" },
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "2px",
              background: "rgba(182,251,203,0.1)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          background: "rgba(182,251,203,0.1)",
        }}
      >
        <Toolbar />

        {/* Main content here */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
