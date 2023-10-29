"use client";

import { CSSTransition } from "react-transition-group";
import "./flip-transition.css";
// import { useState } from "react";

export const FlipCardLayout = ({ showFront, children }: any) => {
  //   const [showFront, setShowFront] = useState(true);
  return (
    <div style={{ perspective: "1000px" }}>
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        {children}
      </CSSTransition>
    </div>
  );
};
