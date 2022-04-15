import React, { useState, useEffect, useMemo } from "react";
import { useCallback } from "react";
import { ThemeProvider } from "./ThemeContext";

const Theme = (props) => {
  const lightTheme = useMemo(
    () => ({
      name: "light",
      background: "white",
      backgroundTranslucid: "rgba(255,255,255,0.85)",
      backgroundSecondary: "rgb(240,240,240)",
      backgroundSecondaryTranslucid: "rgb(240,240,240, 0.85)",
      boxShadowPrimary: "1px 1px 2px #d3d2d2fd",
      boxShadowPrimaryInset: "1px 1px 2px inset #d3d2d2fd",
      extraBackground: "#d3d2d2fd",
      color: "rgb(76, 76, 76)",
      colorSecondary: "#8d8d8d",
      buttonColorPrimary: "rgb(0, 123, 255)",
      borderColorPrimary: "#d3d2d2fd",
      borderColorSecondary: "rgb(151, 151, 151)",
      borderColorTerciary: "#d3d2d2fd",
      mainYellow: "#eff300",
    }),
    []
  );

  const darkTheme = useMemo(
    () => ({
      name: "dark",
      background: "rgb(76, 76, 76)",
      backgroundTranslucid: "rgba(76, 76, 76,0.85)",
      backgroundSecondary: "rgb(66, 66, 66)",
      backgroundSecondaryTranslucid: "rgb(66, 66, 66, 0.85)",
      extraBackground: "rgb(66, 66, 66)",
      boxShadowPrimary: "1px 1px 2px #e7e7e7",
      boxShadowPrimaryInset: "1px 1px 2px inset #e7e7e7",
      color: "#e7e7e7",
      colorSecondary: "rgb(145 145 145)",
      buttonColorPrimary: "#e7e7e7",
      borderColorPrimary: "#e7e7e7",
      borderColorSecondary: "rgb(117, 116, 116)",
      borderColorTerciary: "rgb(117, 116, 116)",
      mainYellow: "#eff300",
      mainGrey: "#585858",
      mediumGrey: "#d3d2d2fd",
      lightGrey: "#e7e7e7",
    }),
    []
  );
  const init = useMemo(
    () => ({
      raw: {
        dark: darkTheme,
        light: lightTheme,
      },
      mainYellow: "#eff300",
      mainGrey: "#585858",
      mainOrange: "#ff4d20",
      mediumGrey: "#d3d2d2fd",
      mainBoxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.13)",
      lightGrey: "#e7e7e7",
    }),
    [lightTheme, darkTheme]
  );
  const [theme, setThemeBase] = useState({ ...init, ...darkTheme });

  const setTheme = useCallback(
    (s) => {
      setThemeBase({
        ...s,
        ...init,
      });
    },
    [init]
  );

  const changeTheme = useCallback(() => {
    const body = document.getElementsByTagName("body")[0];
    if (theme.name === "light") {
      setTheme(darkTheme);
      localStorage.setItem("selectedTheme", "dark");
      !body.classList.replace("light", "dark") && body.classList.add("dark");
    }
    if (theme.name === "dark") {
      setTheme(lightTheme);
      localStorage.setItem("selectedTheme", "light");
      !body.classList.replace("dark", "light") && body.classList.add("light");
    }
  }, [theme, setTheme, lightTheme, darkTheme]);

  useEffect(() => {
    let selectedTheme = localStorage.getItem("selectedTheme");
    const body = document.getElementsByTagName("body")[0];
    if (selectedTheme === "light") {
      setTheme(lightTheme);
      !body.classList.replace("dark", "light") && body.classList.add("light");
    }
    if (selectedTheme === "dark") {
      setTheme(darkTheme);
      !body.classList.replace("light", "dark") && body.classList.add("dark");
    }
  }, [darkTheme, lightTheme, setTheme]);

  return (
    <ThemeProvider value={{ changeTheme, theme }}>
      {props.children}
    </ThemeProvider>
  );
};

export default Theme;
