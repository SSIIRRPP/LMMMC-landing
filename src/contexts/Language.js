import { useCallback, useEffect, useState } from "react";
import spa from "../languages/spa";
import { LanguageProvider } from "./LanguageContext";

const Language = ({ children }) => {
  const [lang, _setLang] = useState("spa");
  const [text, setText] = useState(spa);

  const setLang = useCallback((l) => {
    _setLang(l);
    localStorage.setItem("lang", l);
  }, []);

  const changeLanguage = useCallback(
    async (lan) => {
      const l = lan;
      setLang(lan);
      const f = () =>
        new Promise((resolve, reject) => {
          switch (lan) {
            case "en": {
              import("../languages/en")
                .then((r) => {
                  resolve(r.default);
                })
                .catch((e) => reject(e));
              break;
            }
            case "spa":
            default: {
              resolve(spa);
            }
          }
        });
      f()
        .then((res) => {
          setText(res);
        })
        .catch((e) => {
          setLang(l);
          setText(spa);
          console.log("Error: ", e);
        });
    },
    [setLang]
  );

  useEffect(() => {
    const l = localStorage.getItem("lang");
    if (l) {
      changeLanguage(l);
    }
  }, [changeLanguage]);

  window.chngLng = changeLanguage;

  return (
    <LanguageProvider value={{ text, lang, changeLanguage }}>
      {children}
    </LanguageProvider>
  );
};

export default Language;