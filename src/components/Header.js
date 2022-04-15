import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  Fragment,
} from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LightIcon } from "../assets/icons/light_mode.svg";
import { ReactComponent as DarkIcon } from "../assets/icons/dark_mode.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import logo from "../assets/images/logo.png";
import ThemeContext from "../contexts/ThemeContext";
import "./styles/Header.scss";
import HeaderDropdown from "./Header/HeaderDropdown";
import LanguageContext from "../contexts/LanguageContext";
import LanguageSwitch from "./Header/LanguageSwitch";
import licenses from "../licenses";
import LayoutContext from "../contexts/LayoutContext";

const Header = ({ open, setOpen }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openExpand, setOpenExpand] = useState(false);
  const {
    theme: {
      raw: { dark: theme },
      name,
    },
    changeTheme,
  } = useContext(ThemeContext);
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
          theory,
          practical,
        },
      },
    },
    lang,
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

  const ThemeSwitch = ({ changeTheme, name }) => (
    <div
      className="Header__link--icon"
      onClick={changeTheme}
      style={{
        cursor: "pointer",
      }}
    >
      {name === "dark" ? <LightIcon /> : <DarkIcon />}
    </div>
  );

  const Link = useCallback(
    ({
      to,
      className,
      style,
      disabled = false,
      children,
      disableUnderline = false,
    }) => {
      const st = {
        /* color: theme.color, */
      };

      return (
        <Nav.Item
          className={`Header__link${className ? ` ${className}` : ""}${
            disableUnderline ? "" : " underline-on-hover"
          }`}
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
    },
    [navigate, setOpen]
  );

  const switches = useMemo(() => {
    return (
      <div
        className="Header__switches"
        style={{
          padding: theme && `${collapsed ? "0 1rem 0 0" : "0 0 0 1rem"}`,
        }}
      >
        <LanguageSwitch />
        <ThemeSwitch name={name} changeTheme={changeTheme} />
      </div>
    );
  }, [collapsed, theme, name, changeTheme]);

  return (
    <Navbar
      className={`Header ${theme.name}`}
      collapseOnSelect
      expanded={open}
      sticky="top"
      bg={theme.name === "dark" ? "*dark" : "*light"}
      expand="lg"
      variant={theme.name === "dark" ? "*dark" : "*light"}
    >
      <Container>
        <div className="Header__brand--container">
          <Navbar.Brand style={{ padding: 0 }}>
            <Link
              to="/"
              className="navbar-brand Header__brand"
              style={{ padding: 0 }}
              disableUnderline
            >
              <img src={logo} height={36} alt="lmmmc-logo" />
              {/* LMMMC */}
            </Link>
          </Navbar.Brand>
        </div>
        <div className="Header__collapse--container">
          {collapsed ? switches : null}
          <Navbar.Toggle
            onClick={() => setOpen(!open)}
            className="Header__collapse--button"
            aria-controls="responsive-navbar-nav"
          >
            <MenuIcon />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              {home}
            </Link>
            <NavDropdown
              className={`Header__dropdown ${
                collapsed ? "" : " underline-on-hover"
              }`}
              title={
                <p className={`m0${collapsed ? " underline-on-hover" : ""}`}>
                  {title}
                </p>
              }
              id="collasible-nav-dropdown1"
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
                  <Link to="/embarcaciones/veleros/bavaria-39" disableUnderline>
                    <NavDropdown.Item
                      className="Header__dropdown--link"
                      as="div"
                    >
                      <p className="m0 underline-on-hover">Bavaria 39</p>
                    </NavDropdown.Item>
                  </Link>
                  <span className="Header__expand--divider" />
                  <Link
                    to="/embarcaciones/veleros/maryola-aquadrac-35"
                    disableUnderline
                  >
                    <NavDropdown.Item
                      className="Header__dropdown--link"
                      as="div"
                    >
                      <p className="m0 underline-on-hover">
                        Maryola Aquadrac 35
                      </p>
                    </NavDropdown.Item>
                  </Link>
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
                  <Link
                    to="/embarcaciones/lanchas-con-licencia/saver-585"
                    disableUnderline
                  >
                    <NavDropdown.Item
                      className="Header__dropdown--link"
                      as="div"
                    >
                      <p className="m0 underline-on-hover">Saver 585</p>
                    </NavDropdown.Item>
                  </Link>
                  <span className="Header__expand--divider" />
                  <Link
                    to="/embarcaciones/lanchas-con-licencia/mareti-600"
                    disableUnderline
                  >
                    <NavDropdown.Item
                      className="Header__dropdown--link"
                      as="div"
                    >
                      <p className="m0 underline-on-hover">Mareti 600</p>
                    </NavDropdown.Item>
                  </Link>
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
                  <Link
                    to="/embarcaciones/lanchas-sin-licencia/mareti-500"
                    disableUnderline
                  >
                    <NavDropdown.Item
                      className="Header__dropdown--link"
                      as="div"
                    >
                      <p className="m0 underline-on-hover">
                        Mareti 500 Classic
                      </p>
                    </NavDropdown.Item>
                  </Link>
                  <span className="Header__expand--divider"> </span>
                  <Link
                    to="/embarcaciones/lanchas-sin-licencia/karnic-440"
                    disableUnderline
                  >
                    <NavDropdown.Item
                      className="Header__dropdown--link"
                      as="div"
                    >
                      <p className="m0 underline-on-hover">Karnic 440</p>
                    </NavDropdown.Item>
                  </Link>
                </div>
              </HeaderDropdown>
            </NavDropdown>
            <NavDropdown
              className={`Header__dropdown ${
                collapsed ? "" : " underline-on-hover"
              }`}
              title={
                <p className={`m0${collapsed ? " underline-on-hover" : ""}`}>
                  {school}
                </p>
              }
              id="collasible-nav-dropdown2"
              menuVariant={theme.name === "dark" ? "dark" : "light"}
            >
              <HeaderDropdown
                id={3}
                open={openExpand}
                setOpen={setOpenExpand}
                title={theory}
                className="Header__dropdown--link Header__link"
              >
                <div className="Header__expand--container">
                  {licenses.theory.map((lic, i) => {
                    return (
                      <Fragment key={`license_${lic.id}`}>
                        <Link
                          to={`/cursos/${lic.id}`}
                          lic={lic}
                          disableUnderline
                        >
                          <NavDropdown.Item
                            id={`license_${lic.id}`}
                            className="Header__dropdown--link"
                            as="div"
                          >
                            <p className="m0 underline-on-hover">
                              {lic.name[lang]}
                            </p>
                          </NavDropdown.Item>
                          {i + 1 < licenses.theory.length ? (
                            <span className="Header__expand--divider"> </span>
                          ) : null}
                        </Link>
                      </Fragment>
                    );
                  })}
                </div>
              </HeaderDropdown>
              <NavDropdown.Divider />
              <HeaderDropdown
                id={4}
                open={openExpand}
                setOpen={setOpenExpand}
                title={practical}
                className="Header__dropdown--link Header__link"
              >
                <div className="Header__expand--container">
                  {licenses.practice.map((lic, i) => {
                    return (
                      <Fragment key={`license_${lic.id}`}>
                        <NavDropdown.Item
                          id={`license_${lic.id}`}
                          className="Header__dropdown--link"
                          as="div"
                        >
                          <Link to={`/cursos/${lic.id}`}>{lic.name[lang]}</Link>
                        </NavDropdown.Item>
                        {i + 1 < licenses.practice.length ? (
                          <span className="Header__expand--divider"> </span>
                        ) : null}
                      </Fragment>
                    );
                  })}
                </div>
              </HeaderDropdown>
            </NavDropdown>
            <Link className="nav-link" to="/nosotros">
              {us}
            </Link>
            <Link className="nav-link" to="/contacto">
              {contact}
            </Link>
          </Nav>
        </Navbar.Collapse>
        {!collapsed ? switches : null}
      </Container>
    </Navbar>
  );
};

export default Header;
