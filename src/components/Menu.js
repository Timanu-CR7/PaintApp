import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity, setIsErasing }) => {
    return (
        <div className="Menu">
            <label>Brush Color </label>
            <input
                type="color"
                onChange={(e) => {
                    setLineColor(e.target.value);
                    setIsErasing(false);
                }}
            />
            <label>Brush Width </label>
            <input
                type="range"
                min="3"
                max="20"
                onChange={(e) => {
                    setLineWidth(e.target.value);
                }}
            />
            <label>Brush Opacity</label>
            <input
                type="range"
                min="1"
                max="100"
                onChange={(e) => {
                    setLineOpacity(e.target.value / 100);
                }}
            />
            <button onClick={() => setIsErasing((prev) => !prev)}>
                Toggle Eraser
            </button>
        </div>
    );
};

export default Menu;
