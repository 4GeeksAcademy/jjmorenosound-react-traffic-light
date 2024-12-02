import React from "react";
import { useState, useEffect } from "react";


export const TrafficLight = () => {
    
    const [selected, setSelected] = useState ("red");
    const changeColor = (color) => {
        setSelected(color);
    };
    
    
    return (
    
        <main>
            <div className="p-box"></div>
            <div className="light-box">
                <div className={`red ${selected == "red" ? "light-on-red" : ""}`} onClick={() => changeColor("red")}></div>
                <div className={`yellow ${selected == "yellow" ? "light-on-yellow" : ""}`} onClick={() => changeColor("yellow")}></div>
                <div className={`green ${selected == "green" ? "light-on-green" : ""}`} onClick={() => changeColor("green")}></div>
            </div>
        </main>
    )
}