import Light from "./Light";

const Board = ({
    width = 3,
    height = 3,
    probablityLightIsOn = 0.5
}) => {
    let grid = [];

    const onToggle = (light) => {
        //Toggle adjacent lights
        console.log("toggle board whatever", grid);
    };


    for (let y = 0; y < height; y++) {
        grid.push([]);
        for (let x = 0; x < width; x++) {
            grid[y].push(
                <Light
                    onToggle={onToggle}
                    probablityLightIsOn={probablityLightIsOn}
                />
            );
        }
    }

    return (
        <div className="board">
            {grid.map((row, y) => {
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