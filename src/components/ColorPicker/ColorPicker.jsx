import React, { useState } from "react";
import "./ColorPicker.css";

const ColorButton = ({ color, onClick, isSelected }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: color,
        border: isSelected ? "2px solid black" : "none",
      }}
      onClick={onClick}
    ></button>
  );
};

const ColorPicker = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onColorSelect(color); // Llamada a la función de devolución de llamada
  };

  return (
    <div>
      <ColorButton
        color="red"
        onClick={() => handleColorClick("red")}
        isSelected={selectedColor === "red"}
      />
      <ColorButton
        color="blue"
        onClick={() => handleColorClick("blue")}
        isSelected={selectedColor === "blue"}
      />
      <ColorButton
        color="green"
        onClick={() => handleColorClick("green")}
        isSelected={selectedColor === "green"}
      />
      <ColorButton
        color="yellow"
        onClick={() => handleColorClick("yellow")}
        isSelected={selectedColor === "yellow"}
      />
    </div>
  );
};

export default ColorPicker;
