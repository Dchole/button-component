import "./styles/button.scss";
import PropTypes from "prop-types";

const Button = ({
  children,
  size = "md",
  variant = "default",
  color = "default",
  startIcon = "download",
  endIcon = undefined,
  disabled = false,
  disableShadow = false,
  ...rest
}) => {
  const variantColor = !disabled ? `${variant}-${color}` : variant;
  const elevation = !disableShadow && "elevation";

  return (
    <button
      className={`${variantColor} ${size} ${elevation}`}
      disabled={disabled}
      {...rest}
    >
      {startIcon && (
        <span id="start-icon" className="material-icons">
          {startIcon}
        </span>
      )}
      <span>{children}</span>
      {endIcon && (
        <span id="end-icon" className="material-icons">
          {endIcon}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary", "default", "danger"]),
  variant: PropTypes.oneOf(["default", "outlined", "text"]),
  endIcon: PropTypes.string,
  startIcon: PropTypes.string,
  disabled: PropTypes.bool,
  disableShadow: PropTypes.bool,
  children: PropTypes.string.isRequired
};

export default Button;
