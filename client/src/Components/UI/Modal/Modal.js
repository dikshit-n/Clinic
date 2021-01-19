import React, { useEffect, useState } from "react";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
  let outerClassNames = ["my-modal", props.className];
  let innerClassNames = ["modal-content", props.contentClassName];
  useEffect(() => {
    const body = document.querySelector("body");
    if (props.show) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "";
    }
  }, [props.show]);
  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <div {...props} className={outerClassNames.join(" ")}>
        <div onClick={props.onClose} className="outer-modal"></div>
        <div className={innerClassNames.join(" ")}>{props.children}</div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
