import { useContext } from "react";
import { Container } from "react-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";
import "./styles/CourseBody.scss";

const InfoListItem = ({ item }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="CourseBody__listItem"
      style={{ backgroundColor: theme.mainYellow }}
    >
      <div className="CourseBody__listItem--icon">
        {item.icon ? item.icon : null}
      </div>
      <div
        className="CourseBody__listItem--info"
        style={{
          gridTemplateRows: item.name && item.description ? "auto auto" : "1fr",
        }}
      >
        {item.name ? (
          <div className="CourseBody__listItem--name">
            <h5>{item.name}</h5>
          </div>
        ) : null}
        {item.description ? (
          <div className="CourseBody__listItem--description">
            <p>{item.description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const InfoList = ({ list, courseId, type }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`CourseBody__list CourseBody__list--${type}`}>
      {type ? (
        <div
          className="CourseBody__list--title"
          style={{ borderColor: theme.backgroundSecondary }}
        >
          <h4 style={{ color: theme.color }}>{type}</h4>
        </div>
      ) : null}
      <div
        className="CourseBody__list--body"
        style={{ borderColor: theme.backgroundSecondary }}
      >
        {list.map((t, i) => {
          return <InfoListItem key={`${courseId}-attribution-${i}`} item={t} />;
        })}
      </div>
    </div>
  );
};

const CourseBody = ({ course }) => {
  return (
    <Container>
      <div className="CourseBody">
        {course.attributions || course.requirements || course.caracteristics ? (
          <div className="CourseBody__info CourseBody__section">
            {course.attributions ? (
              <InfoList
                list={course.attributions}
                type="Atribuciones"
                courseId={course.id}
              />
            ) : null}
            {course.requirements ? (
              <InfoList
                list={course.requirements}
                type="Requisitos"
                courseId={course.id}
              />
            ) : null}
            {course.caracteristics ? (
              <InfoList list={course.caracteristics} courseId={course.id} />
            ) : null}
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default CourseBody;
