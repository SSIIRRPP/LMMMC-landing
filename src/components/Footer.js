import { useMemo } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";

const Footer = ({ footerRef }) => {
  const year = useMemo(() => new Date(Date.now()).getFullYear(), []);
  return (
    <footer ref={footerRef}>
      <div className="Footer">
        <Container>
          <span className="Footer__text">
            Copyright © {year} La Manga Mar Menor CHARTER |
          </span>
          <Link className="Footer__link" to="/aviso-legal">
            {" "}
            AVISO LEGAL
          </Link>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
