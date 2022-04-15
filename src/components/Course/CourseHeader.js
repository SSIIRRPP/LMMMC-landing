import { useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import ADJParallaxBanner from "../Visual/Parallax/AdjustableParallaxBanner";
import MouseParallax from "../Visual/Parallax/MouseParallax";
import ParallaxBackgroundLines from "../Visual/Parallax/ParallaxBackgroundLines";
import CourseBreadcrumb from "./CourseBreadcrumb";
import "./styles/CourseHeader.scss";

const Background = (props) => {
  const { image, height, width, course } = props;
  const newProps = useMemo(() => {
    let nP = { ...props };
    delete nP.image;
    return nP;
  }, [props]);
  return (
    <MouseParallax {...newProps} factor={{ x: 0.002, y: 0.005 }}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: course.backgroundPosition
            ? course.backgroundPosition
            : "90% 55%",
          backgroundSize: "cover",
          height,
          width,
        }}
      />
    </MouseParallax>
  );
};

const Lines = ({ height }) => {
  const sty = useMemo(
    () => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    }),
    []
  );
  const lines = useMemo(() => {
    return [
      {
        scale: { x: [1.1, 1], y: [4, 1.1] },
        startScroll: height * 10,
        style: {
          width: "100%",
        },
      },
    ];
  }, [height]);
  return <ParallaxBackgroundLines lines={lines} style={sty} height={height} />;
};

const Body = (props) => {
  const { course, name } = props;
  const newProps = useMemo(() => {
    let nP = { ...props };
    delete nP.course;
    delete nP.name;
    return nP;
  }, [props]);
  return (
    <Container>
      <MouseParallax
        {...newProps}
        factor={{ x: -0.002, y: -0.005 }}
        updateStyles={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
          gridTemplateColumns: "1fr",
        }}
      >
        <div className="CourseHeader__Body--breadcrumb">
          <CourseBreadcrumb name={name} type={course.type} />
        </div>
        <div className="CourseHeader__Body--title">
          <h1>{name}</h1>
        </div>
      </MouseParallax>
    </Container>
  );
};

const CourseHeader = ({ course }) => {
  const name = useMemo(() => course.name["spa"], [course]);
  const backgroundImage = useMemo(
    () =>
      course.background
        ? require(`../../assets/images/courses/${course.id}/background.${
            course.bckImageFormat ? course.bckImageFormat : "jpg"
          }`)
        : null,
    [course.id, course.background, course.bckImageFormat]
  );

  const defBackgroundImage = useMemo(
    () => require("../../assets/images/1.png"),
    []
  );

  const layers = useCallback(
    (props) => {
      const { height } = props;
      return [
        {
          translateY: [10, 0],
          scale: [1.25, 1],
          shouldAlwaysCompleteAnimation: true,
          children: (
            <Background
              course={course}
              image={backgroundImage ? backgroundImage : defBackgroundImage}
              {...props}
            />
          ),
        },
        {
          children: <Lines {...props} />,
          style: { height, zIndex: 5 },
        },
        {
          opacity: [1, 0.3],
          shouldAlwaysCompleteAnimation: true,
          style: { height, zIndex: 10 },
          children: (
            <Parallax
              translateY={[0, -20]}
              scale={[1, 0.85]}
              opacity={[1, 0.8, "easeOutCubic"]}
              shouldAlwaysCompleteAnimation={true}
              style={{
                height,
              }}
            >
              <Body course={course} name={name} {...props} />
            </Parallax>
          ),
        },
      ];
    },
    [backgroundImage, course, defBackgroundImage, name]
  );

  const widthSwitch = useCallback((width) => {
    switch (true) {
      default: {
        return { height: 700 };
      }
    }
  }, []);

  return <ADJParallaxBanner layers={layers} widthSwitch={widthSwitch} fadeIn />;
};

export default CourseHeader;
