import { useContext } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";

const CourseBreadcrumb = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Breadcrumb
      className={`LMMMCBreadcrumb ${theme.name}`}
      listProps={{ style: { marginBottom: "0" } }}
    >
      <LinkContainer to="/cursos">
        <BreadcrumbItem style={{ fontSize: ".8rem" }}>Cursos</BreadcrumbItem>
      </LinkContainer>
      <BreadcrumbItem linkAs="span">{name}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default CourseBreadcrumb;
