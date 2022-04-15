import { useContext } from "react";
import { ReactComponent as PeopleIcon } from "../../assets/icons/people.svg";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import "./styles/CapacityIcon.scss";

const initStyle = {
  div: {},
  span: {},
  h6: {},
};

const CapacityIcon = ({
  capacity,
  className,
  followTheme = false,
  light = false,
  addLabel,
  styles: { div = {}, span = {}, h6 = {} } = initStyle,
}) => {
  const { theme } = useContext(ThemeContext);
  const {
    text: {
      boatInfo: { capacity: cap },
    },
  } = useContext(LanguageContext);
  return (
    <div
      className={`CapacityIcon${className ? ` ${className}` : ""}`}
      style={div || {}}
    >
      {addLabel ? (
        <p
          style={{
            color: followTheme
              ? theme.colorSecondary
              : light
              ? theme?.raw?.dark?.colorSecondary
              : theme?.raw?.light?.colorSecondary,
          }}
        >
          {cap}:{" "}
        </p>
      ) : null}
      <h6
        style={{
          ...h6,
          color: followTheme
            ? theme.color
            : light
            ? theme?.raw?.dark?.color
            : theme?.raw?.light?.color,
        }}
      >
        {capacity}
      </h6>
      <span style={{ ...span, color: theme.color }}>
        <PeopleIcon
          fill={
            followTheme
              ? theme.color
              : light
              ? theme?.raw?.dark?.color
              : theme?.raw?.light?.color
          }
        />
      </span>
    </div>
  );
};

export default CapacityIcon;
