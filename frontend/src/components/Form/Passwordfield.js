const CustomPassworField = (props) => {
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
        type={props.showPassword ? "text" : "password"}
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
