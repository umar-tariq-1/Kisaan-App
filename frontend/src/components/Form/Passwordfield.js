import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const CustomPassworField = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      {...(onClick = props.containToolTip && props.handleTooltipOpen)}
      {...(props.inputErrors.password && props.error)}
      required
      style={props.style}
      variant="outlined"
    >
      <InputLabel color="success" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        color="success"
        id={props.id}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
        name={props.password}
        onChange={props.handleChange}
      />
    </FormControl>
  );
};

export default CustomPassworField;
