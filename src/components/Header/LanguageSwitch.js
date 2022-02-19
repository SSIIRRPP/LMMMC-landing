import { MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import SpaFlag from "../../assets/icons/spa.png";
import EnFlag from "../../assets/icons/en.png";

const LanguageSwitch = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  return (
    <div className="Header__lang--container">
      <Select
        className="Header__lang--select"
        variant="standard"
        value={lang}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <MenuItem value="spa">
          <img className="Header__lang--image" src={SpaFlag} alt="spain-flag" />
        </MenuItem>
        <MenuItem value="en">
          <img
            className="Header__lang--image"
            src={EnFlag}
            alt="united-kingdom-flag"
          />
        </MenuItem>
      </Select>
    </div>
  );
};

export default LanguageSwitch;
