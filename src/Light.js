import { useState } from "react";

const Light = ({ on,  onToggle, probabilityLightIsOn = 0.5 }) => {
    let [isOn, setIsOn] = useState( on !== undefined? on : probabilityLightIsOn > Math.random());

    const toggle = () => {
        setIsOn(!isOn);
        onToggle();
    }

    return (
        <span key={this} className="light">
            <button onClick={toggle}>{isOn ? 'Off' : 'On'}</button>
        </span>
    );
};

export default Light;