import { useState } from "react";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
    >{props.value}</button>
  );
}
