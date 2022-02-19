import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LightIcon } from "../assets/icons/light_mode.svg";
import { ReactComponent as DarkIcon } from "../assets/icons/dark_mode.svg";
import ThemeContext from "../contexts/ThemeContext";
import { LayoutContext } from "./Layout";
import "./styles/Header.scss";
import HeaderDropdown from "./Header/HeaderDropdown";
import LanguageContext from "../contexts/LanguageContext";
import LanguageSwitch from "./Header/LanguageSwitch";

const Header = ({ open, setOpen }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openExpand, setOpenExpand] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  const {
    text: {
      Header: {
        home,
        dropdown: {
          title,
          all,
          sailboats,
          license,
          no_license,
          school,
          us,
          contact,
        },
      },
    },
  } = useContext(LanguageContext);
  const {
    sizes: { windowWidth },
  } = useContext(LayoutContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (windowWidth < 992) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [windowWidth]);

  const ThemeSwitch = () => (
    <div
      className="Header__link--icon"
      onClick={changeTheme}
      style={{
        cursor: "pointer",
        padding: `${collapsed ? "0 1.75rem 0 0" : "0 0 0 1rem"}`,
      }}
    >
      {theme.name === "dark" ? (
        <LightIcon fill={theme.color} />
      ) : (
        <DarkIcon fill={theme.color} />
      )}
    </div>
  );

  const Link = ({ to, className, style, disabled = false, children }) => {
    const st = {
      color: "#313131",
    };

    return (
      <Nav.Item
        className={`Header__link${className ? ` ${className}` : ""}`}
        style={style ? { ...style, ...st } : st}
        onClick={
          !disabled
            ? () => {
                navigate(to);
                setOpen(false);
                setOpenExpand(null);
              }
            : () => {}
        }
      >
        {children}
      </Nav.Item>
    );
  };

  return (
    <Navbar
      className={`Header ${theme.name}`}
      collapseOnSelect
      expanded={open}
      sticky="top"
      bg={theme.name === "dark" ? "dark" : "light"}
      expand="lg"
      variant={theme.name === "dark" ? "dark" : "light"}
    >
      <Container>
        <div className="Header__brand--container">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand Header__brand">
              LMMMC
            </Link>
          </Navbar.Brand>
          <LanguageSwitch />
        </div>
        <div className="Header__collapse--container">
          {collapsed ? <ThemeSwitch /> : null}
          <Navbar.Toggle
            onClick={() => setOpen(!open)}
            aria-controls="responsive-navbar-nav"
          />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              {home}
            </Link>
            <NavDropdown
              className="Header__dropdown"
              title={title}
              id="collasible-nav-dropdown"
              menuVariant={theme.name === "dark" ? "dark" : "light"}
            >
              <NavDropdown.Item className="Header__dropdown--link" as="div">
                <Link to="/embarcaciones">{all}</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <HeaderDropdown
                id={0}
                open={openExpand}
                setOpen={setOpenExpand}
                title={sailboats}
                className="Header__dropdown--link Header__link"
              >
                <div className="Header__expand--container">
                  <NavDropdown.Item className="Header__dropdown--link" as="div">
                    <Link to="/embarcaciones/bavaria-39">Bavaria 39</Link>
                  </NavDropdown.Item>
                  <span className="Header__expand--divider" />
                  <NavDropdown.Item className="Header__dropdown--link" as="div">
                    <Link to="/embarcaciones/maryola-aquadrac-35">
                      Maryola Aquadrac 35
                    </Link>
                  </NavDropdown.Item>
                </div>
              </HeaderDropdown>
              <NavDropdown.Divider />
              <HeaderDropdown
                id={1}
                open={openExpand}
                setOpen={setOpenExpand}
                title={license}
                className="Header__dropdown--link Header__link"
              >
                <div className="Header__expand--container">
                  <NavDropdown.Item className="Header__dropdown--link" as="div">
                    <Link to="/embarcaciones/saber-585">Saber 585</Link>
                  </NavDropdown.Item>
                  <span className="Header__expand--divider" />
                  <NavDropdown.Item className="Header__dropdown--link" as="div">
                    <Link to="/embarcaciones/mareti-600">Mareti 600</Link>
                  </NavDropdown.Item>
                </div>
              </HeaderDropdown>
              <NavDropdown.Divider />
              <HeaderDropdown
                id={2}
                open={openExpand}
                setOpen={setOpenExpand}
                title={no_license}
                className="Header__dropdown--link Header__link"
              >
                <div className="Header__expand--container">
                  <NavDropdown.Item className="Header__dropdown--link" as="div">
                    <Link to="/embarcaciones/mareti-500">
                      Mareti 500 Classic
                    </Link>
                  </NavDropdown.Item>
                  <span className="Header__expand--divider" />
                  <NavDropdown.Item className="Header__dropdown--link" as="div">
                    <Link to="/embarcaciones/karnic-400">Karnic 400</Link>
                  </NavDropdown.Item>
                </div>
              </HeaderDropdown>
            </NavDropdown>
            <Link className="nav-link" to="/escuela">
              {school}
            </Link>
            <Link className="nav-link" to="/nosotros">
              {us}
            </Link>
            <Link className="nav-link" to="/contacto">
              {contact}
            </Link>
          </Nav>
        </Navbar.Collapse>
        {!collapsed ? <ThemeSwitch /> : null}
      </Container>
    </Navbar>
  );
};

export default Header;
