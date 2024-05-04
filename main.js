

function setSize(num) {
    
}

let GRID = 16 * 16

function createSquares (GRID) {
    const container = document.querySelector("#container")
    for (let i = 0; i < GRID; i++) {
        const newDiv = document.createElement("div")
        newDiv.classList.add("square")
        container.appendChild(newDiv)
    }
}

createSquares(GRID)

