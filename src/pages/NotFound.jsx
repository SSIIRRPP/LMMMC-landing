import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./styles/NotFound.scss";
import ThemeContext from "../contexts/ThemeContext";
import MouseParallax from "../components/Visual/Parallax/MouseParallax";

const NotFound = ({ minHeight }) => {
  const {
    text: {
      NotFound: { title, text, button },
    },
  } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <Container>
      <MouseParallax factor={{ x: 0.01, y: 0.01 }} height={minHeight}>
        <div className="NotFound" style={{ minHeight }}>
          <aside>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
              alt="404"
            />
          </aside>
          <main>
            <h1 style={{ color: theme.color }}>{title}</h1>
            <p style={{ color: theme.color }}>{text}</p>
            <Button onClick={() => navigate("/")}>{button}</Button>
          </main>
        </div>
      </MouseParallax>
    </Container>
  );
};

export default NotFound;
