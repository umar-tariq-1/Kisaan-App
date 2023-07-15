import { TextField } from "@mui/material";

const CustomTextField = (props) => {
  return (
    <TextField
      {...(props.inputErrors.fname && props.error)}
      style={props.style}
      color="success"
      type="text"
      label={props.label}
      name={props.name}
      onChange={props.onChange}
      required
    />
  );
};

export default CustomTextField;
