import React from "react";
import { withScroll } from "react-fns";

const OnScrollRender = ({ x, y }, props) => {
  if (y > props.limitY) {
    return props.component;
  } else {
    return <></>;
  }
};

export default withScroll(OnScrollRender);
