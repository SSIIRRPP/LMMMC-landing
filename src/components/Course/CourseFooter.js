import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import MouseParallax from "../Visual/Parallax/MouseParallax";
import "./styles/CourseFooter.scss";

const CourseFooter = ({ course }) => {
  const navigate = useNavigate();

  const linkTo = () => {
    navigate(`/cursos/tarifas?courseId=${course.id}`);
  };

  return (
    <Container>
      <MouseParallax /* height={400}  */ factor={{ x: 0.01, y: 0.02 }}>
        <div className="CourseFooter">
          <div className="CourseFooter__card">
            <div className="CourseFooter__top">
              <h2>Consulta los precios</h2>
            </div>
            <div className="CourseFooter__bottom">
              <Button onClick={linkTo} className="CourseFooter__button">
                Ver precios ahora
              </Button>
            </div>
          </div>
        </div>
      </MouseParallax>
    </Container>
  );
};

export default CourseFooter;
