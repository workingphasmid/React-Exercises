import React from "react";

export default function Buttons({ children }) {
  return <div className="buttons">{children}</div>;
}

export function Left() {
  return <>Left</>;
}

export function Right() {
  return <>Right</>;
}
