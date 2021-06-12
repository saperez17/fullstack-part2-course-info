import react from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {course.map((item, idx) => (
        <div>
          <Header course={item.name} />
          <Content parts={item.parts} />
          <Total parts={item.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
