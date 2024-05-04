let gridSize = 16;

function setSize() {
    gridSize = parseInt(document.querySelector("#gridSize").value);
    createSquares(gridSize);
}

const submit = document.querySelector("#btnSub");
submit.addEventListener("click", setSize);

const clear = document.querySelector("#btnClear");
clear.addEventListener("click", () =>
    document.querySelectorAll(".square").forEach((square) => {
        square.style.backgroundColor = "";
    })
);

function createSquares(gridSize) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    const squareSize = 660 / gridSize;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.style.width = `${squareSize}px`;
            newDiv.style.height = `${squareSize}px`;
            container.appendChild(newDiv);

            newDiv.addEventListener("mouseenter", (event) => {
                if (isDrawing) {
                    event.target.style.backgroundColor = "black";
                }
            });

            newDiv.addEventListener("mousedown", (event) => {
                isDrawing = true;
                if (isDrawing) {
                    event.target.style.backgroundColor = "black";
                }
            });
        }
    }
}

createSquares(gridSize);

let isDrawing = false;

document.querySelector("#container").addEventListener("mousedown", () => {
});

document.querySelector("#container").addEventListener("mouseup", () => {
    isDrawing = false;
});
