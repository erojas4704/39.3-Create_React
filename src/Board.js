import { useState } from "react";
import Light from "./Light";
import "./Board.css";

const generate2dArray = (width, height, probabilityLightIsOn) => {
    const arr = [];
    for (let x = 0; x < width; x++) {
        arr[x] = [];
        for (let y = 0; y < height; y++) {
            arr[x][y] = Math.random() > probabilityLightIsOn
        }
    }
    return arr;
}

const Board = ({
    width = 3,
    height = 3,
    probablityLightIsOn = 0.5
}) => {
    let [lights, setLights] = useState(generate2dArray(width, height, probablityLightIsOn));
    let [gameWon, setGameWon] = useState(false);

    function toggleAdjacentLights(origArray, x, y) {
        let alteredArray = [...origArray];
        alteredArray[x][y] = !alteredArray[x][y];
        if (x > 0) alteredArray[x - 1][y] = !alteredArray[x - 1][y];
        if (x < width - 1) alteredArray[x + 1][y] = !alteredArray[x + 1][y];
        if (y > 0) alteredArray[x][y - 1] = !alteredArray[x][y - 1];
        if (y < height - 1) alteredArray[x][y + 1] = !alteredArray[x][y + 1];
        return alteredArray;
    }

    function checkGameWon(array) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                if (array[x][y] === true) {
                    return false;
                }
            }
        }
        return true;
    }


    const onToggle = (x, y, on) => {
        //Toggle adjacent lights
        let newLights = toggleAdjacentLights(lights, x, y);
        setLights(newLights);
        if (checkGameWon(newLights)) {
            setGameWon(true);
            console.log(`Game won!`);
        };
    };


    let grid = [];
    for (let y = 0; y < height; y++) {
        grid.push([]);
        for (let x = 0; x < width; x++) {
            grid[y].push(
                <Light
                    key={`${x}${y}`}
                    onToggle={onToggle}
                    on={lights[x][y]}
                    x={x}
                    y={y}
                />
            );
        }
    }

    return (
        <div className="board">
            <h3>Lights Out</h3>
            {gameWon ? (<div>You win forever</div>) : grid.map((row, y) => {
                return (
                    <div key={y}>
                        {row}
                    </div>
                )
            })}
        </div>
    );
}

export default Board;
