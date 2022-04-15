import { useContext, useMemo } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import capitalize from "../../util/capitalize";

const BoatBreadcrumb = ({ boat }) => {
  const { theme } = useContext(ThemeContext);
  const {
    text: {
      boatTypes,
      Boat: {
        Header: { Breadcrumb: txt },
      },
    },
  } = useContext(LanguageContext);
  const type = useMemo(() => {
    const { type: t, cap = [true, [1]] } = boatTypes(boat.type);
    return capitalize(t.split("-").join(" "), ...cap);
  }, [boat?.type, boatTypes]);

  return (
    <Breadcrumb
      className={`LMMMCBreadcrumb ${theme.name}`}
      listProps={{ style: { marginBottom: "0" } }}
    >
      <LinkContainer to="/embarcaciones">
        <BreadcrumbItem style={{ fontSize: ".8rem" }}>{txt}</BreadcrumbItem>
      </LinkContainer>
      <LinkContainer to="/embarcaciones">
        <BreadcrumbItem>{type}</BreadcrumbItem>
      </LinkContainer>
      <BreadcrumbItem linkAs="span">{boat.name}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BoatBreadcrumb;
