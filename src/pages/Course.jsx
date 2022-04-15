import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseHeader from "../components/Course/CourseHeader";
import practice from "../licenses/practice";
import theory from "../licenses/theory";
import NotFound from "./NotFound";
import FadeIn from "react-fade-in";
import CourseBody from "../components/Course/CourseBody";
import CourseFooter from "../components/Course/CourseFooter";
import LayoutContext from "../contexts/LayoutContext";

const courses = [Object.values(theory), Object.values(practice)].flat();

const Course = () => {
  const { courseId } = useParams();
  const [init, setInit] = useState(false);
  const [course, setCourse] = useState(null);
  const [show, setShow] = useState(false);
  const { Fallback } = useContext(LayoutContext);

  useEffect(() => {
    if (courseId) {
      setCourse(courses.find((b) => b.id === courseId));
      setInit(true);
    }
  }, [courseId]);

  useEffect(() => {
    setShow(false);
    let tm = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(tm);
  }, [course]);

  return course ? (
    <>
      {show ? (
        <FadeIn delay={300} transitionDuration={500}>
          <CourseHeader course={course} />
          <CourseBody course={course} />
          <CourseFooter course={course} />
        </FadeIn>
      ) : (
        <Fallback />
      )}
    </>
  ) : (
    <>{init ? <NotFound /> : null}</>
  );
};

export default Course;
