import React, { useState } from "react";
import "./progress.css";

const Progress = ({
  progress,
  innerClassName,
  outerClassName,
  innerStyle,
  outerStyle,
}) => {
  const [myProgress, setMyProgress] = useState(0);
  let outer = [outerClassName, "react-outer-progress"];
  let inner = [innerClassName, "react-inner-progress"];
  setTimeout(() => {
    setMyProgress(progress);
  }, 200);
  return (
    <div
      style={{
        ...outerStyle,
      }}
      className={outer.join(" ")}
    >
      <div
        style={{
          width: myProgress + "%",
          ...innerStyle,
        }}
        className={inner.join(" ")}
      ></div>
    </div>
  );
};

export default Progress;
