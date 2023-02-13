import React from "react";
export type optionsType = { title: string };
export default function Bar(props: optionsType) {
  console.log(props);
  return <div>Bar</div>;
}
