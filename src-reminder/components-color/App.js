import React from "react";
import AddColorForm from "./AddColorForm";
import Star from "./Star";
import StarRaring from "./StarRaring";

export default function App() {
  return (
    <div>
      <AddColorForm
        newColor={(t, b) => {
          console.log(`${t} ${b}`);
        }}
      />
      <StarRaring />
    </div>
  );
}
