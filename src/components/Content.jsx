import react from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <p>
      {props.parts.map((item, idx) => (
        <Part name={item.name} exercises={item.exercises} />
      ))}
    </p>
  );
};

export default Content;
