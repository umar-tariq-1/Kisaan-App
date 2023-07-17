import React from "react";
import { withScroll } from "react-fns";
import { FiArrowRightCircle } from "react-icons/fi";

const OnScrollRender = ({ x, y }) => {
  if (y > 600) {

    return (<>
        <hr />
        <FiArrowRightCircle
          className="arrow-button"
          size={36}
          style={{ marginLeft: "40%" }}
        />
        </>);
  } else {
    return <></>;
  }
};

export default withScroll(OnScrollRender);
