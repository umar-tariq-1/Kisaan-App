import { DotLoaderOverlay } from "react-spinner-overlay";

const CustomLoadingAnimation = (props) => {
  return (
    <DotLoaderOverlay
      overlayColor={props.overlayColor || "rgba(0, 0, 0, 0.7)"}
      color="#1b854a"
      size={20}
      between={13}
    />
  );
};

export default CustomLoadingAnimation;
