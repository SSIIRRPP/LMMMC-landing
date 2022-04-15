import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect, useMemo, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
/* import { useLocation } from "react-router"; */
import LanguageContext from "../contexts/LanguageContext";
import ThemeContext from "../contexts/ThemeContext";
import licenses from "../licenses";
import "./styles/CoursesPrices.scss";
function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const PriceItem = ({ course, courseId, theme, lang }) => {
  const {
    text: {
      CoursesPrices: { soon },
    },
  } = useContext(LanguageContext);
  const rowRef = useRef();
  const matchesCourse = useMemo(
    () => courseId === course.id,
    [courseId, course.id]
  );

  useEffect(() => {
    if (matchesCourse) {
      rowRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [matchesCourse]);

  return (
    <TableRow
      ref={rowRef}
      className={`CoursesPrices__item${
        matchesCourse ? " selected-course" : ""
      } ${theme.name}`}
    >
      <TableCell className="CoursesPrices__item--cell">
        <Link to={`/cursos/${course.id}`} style={{ color: theme.color }}>
          {course.name[lang]}
        </Link>
      </TableCell>
      <TableCell
        className="CoursesPrices__item--cell"
        style={{ color: theme.color }}
      >
        {course.price ? <>{course.price} €</> : <>{soon}</>}
      </TableCell>
    </TableRow>
  );
};

const PricesTable = ({ items = [], title, lang, theme }) => {
  const query = useQuery();
  const courseId = useMemo(() => query.get("courseId"), [query]);
  const rows = useMemo(() => {
    return items.map((course, i) => {
      return (
        <PriceItem
          course={course}
          courseId={courseId}
          theme={theme}
          lang={lang}
          key={`${course.name[lang]}-price-${i}`}
        />
      );
    });
  }, [theme, lang, items, courseId]);
  return (
    <>
      <TableRow className="CoursesPrices__item--title">
        <TableCell className="CoursesPrices__item--titleCell" colSpan={2}>
          <h3 style={{ color: theme.color }}>{title}</h3>
        </TableCell>
      </TableRow>
      {rows}
    </>
  );
};

const CoursesPrices = () => {
  const {
    text: {
      CoursesPrices: { title, name, price, theory, practice },
    },
    lang,
  } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <Container className="CoursesPrices">
      <div
        className="CoursesPrices__header"
        style={{ borderColor: theme.borderColorPrimary }}
      >
        <h1 style={{ color: theme.color }}>{title}</h1>
      </div>
      <div
        className="CoursesPrices__body"
        style={{ borderColor: theme.borderColorTerciary }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className="CoursesPrices__table--header"
                style={{ color: theme.color }}
              >
                {name}
              </TableCell>
              <TableCell
                className="CoursesPrices__table--header"
                style={{ color: theme.color }}
              >
                {price} (€)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PricesTable
              theme={theme}
              lang={lang}
              title={theory}
              items={licenses.theory}
            />
            <PricesTable
              theme={theme}
              lang={lang}
              title={practice}
              items={licenses.practice}
            />
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default CoursesPrices;
