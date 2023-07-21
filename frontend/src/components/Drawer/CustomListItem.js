import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const CustomListItem = (props) => {
  return (
    <ListItem onClick={props.handleClick} key={props.text} disablePadding>
      <ListItemButton sx={{}} onClick={props.closeDrawer}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontSize: "21px" }}
          primary={props.text}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
