import * as React from "react";
import PropTypes from "prop-types";
import HomeContent from "../../pages/Home/homecontent";
import HomeFeatures from "../../pages/Home/homefeatures";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FiMenu } from "react-icons/fi";
import { IoStorefrontOutline } from "react-icons/io5";
import CustomListItem from "./CustomListItem";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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

  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <CustomListItem
          text="Dashboard"
          icon={1}
          handleClick={() => {
            navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="All Products"
          icon={2}
          handleClick={() => {
            navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="My Products"
          icon={3}
          handleClick={() => {
            navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="Settings"
          icon={4}
          handleClick={() => {
            navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="My Profile"
          icon={5}
          handleClick={() => {
            navigate("/");
          }}
          closeDrawer={closeDrawer}
        />
        <CustomListItem
          text="Logout"
          icon={6}
          handleClick={() => {
            navigate("/");
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
          {/* <Typography color={"rgb(33, 37, 41)"} variant="h5" component="div">
            <Icon sx={{ ml: 2, display: { xs: "none", md: "inline" } }}>
              <IoStorefrontOutline color="rgb(33, 37, 41)" size={40} />
            </Icon>
            &nbsp;&nbsp;KisaanApp Admin
          </Typography> */}
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
              marginTop: { xs: "5px", sm: "-3px" },
              height: { xs: "calc(100% - 5px)", sm: "calc(100% + 3px)" },
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
        }}
      >
        <Toolbar />
        <HomeContent />
        <HomeFeatures />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
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
