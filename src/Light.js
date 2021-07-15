import { useState } from "react";
import "./Light.css";

const Light = ({ on, onToggle, probabilityLightIsOn = 0.5, x, y }) => {
    const toggle = () => {
        onToggle(x, y, on);
    }

    return (
        <span>
            <button onClick={toggle} className={on ? "light on" : "light off"}>
            </button>
        </span>
    );
};

export default Light;