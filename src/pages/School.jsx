import { useCallback, useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";
import ThemeContext from "../contexts/ThemeContext";
import FadeIn from "react-fade-in";
import licenses from "../licenses";
import "./styles/School.scss";

const School = () => {
  const {
    text: {
      School: {
        title,
        titles: { theory, practice },
      },
    },
    lang,
  } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const List = useCallback(
    ({ items, type }) => {
      return (
        <div className="School__list--container">
          <div
            className="School__list--wrapper"
            style={{
              borderColor: theme.borderColorSecondary,
              backgroundColor: theme.backgroundSecondary,
            }}
          >
            <div
              className="School__list--header"
              style={{ borderColor: theme.borderColorSecondary }}
            >
              <h3 style={{ color: theme.color }}>{type}</h3>
            </div>
            <div className="School__list--body">
              <ListGroup>
                {items.map((course, i) => (
                  <Link
                    key={`course-list-item-${course.id}`}
                    to={`/cursos/${course.id}`}
                  >
                    <ListGroup.Item
                      className={`School__list--item ${theme.name}`}
                      style={{
                        borderBottom:
                          items.length > i + 1
                            ? `1px solid ${theme.borderColorSecondary}`
                            : "none",
                        color: theme.color,
                      }}
                    >
                      <p
                        style={{ color: theme.color }}
                        className="m0 underline-on-hover"
                      >
                        {course.name[lang]}
                      </p>
                    </ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            </div>
          </div>
        </div>
      );
    },
    [theme, lang]
  );
  return (
    <FadeIn wrapperTag="main">
      <Container>
        <div className="School__container">
          <div
            className="School__header"
            style={{ borderColor: theme.borderColorSecondary }}
          >
            <h2 style={{ color: theme.color }}>{title}</h2>
          </div>
          <FadeIn
            className="School__wrapper"
            delay={150}
            transitionDuration={800}
          >
            <List items={licenses.theory} type={theory} />
            <List items={licenses.practice} type={practice} />
          </FadeIn>
        </div>
      </Container>
    </FadeIn>
  );
};

export default School;
