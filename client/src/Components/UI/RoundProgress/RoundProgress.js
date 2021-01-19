import React, { Fragment } from "react";
import "./RoundProgress.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RoundProgress = (props) => {
  const classNames = [
    "CircularProgressbar-path",
    "CircularProgressbar-trail",
    "CircularProgressbar-text",
    "CircularProgressbar-background",
  ];

  return (
    <Fragment>
      <style>
        {`.CircularProgressbar-path {
            stroke: ${props.barColor} !important;
            }
            .CircularProgressbar-trail {
            stroke: ${props.pathColor} !important;
            }
            .CircularProgressbar-text {
            fill: ${props.textColor} !important;
            stroke: ${props.textColor} !important;
            }
            .CircularProgressbar-background {
            fill: ${props.backgroundColor} !important;
            stroke: ${props.backgroundColor} !important;
            }`}
      </style>
      {props.children ? (
        <CircularProgressbarWithChildren
          className={classNames.join(" ")}
          value={props.percentage}
        >
          {props.children}
        </CircularProgressbarWithChildren>
      ) : (
        <CircularProgressbar
          className={classNames.join(" ")}
          value={props.percentage}
          text={`${props.percentage}%`}
        >
          {props.children}
        </CircularProgressbar>
      )}
    </Fragment>
  );
};

export default RoundProgress;
