import react from "react";

const Total = (props) => {
  return (
    <p>
      <strong>
        Total of exercises{" "}
        {props.parts.reduce((sum, acc) => sum + acc.exercises, 0)}
      </strong>
    </p>
  );
};
export default Total;
