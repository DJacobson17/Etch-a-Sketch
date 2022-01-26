const grid = document.getElementById("container");
const clear = document.getElementById("clear");

populate(16);
function populate (cells) {
    document.getElementById("container").style.gridTemplateColumns = `repeat( ${cells} , auto)`;
    const x = cells*cells
    for (let i = 0; i < x ; i++)  {
    
        addSquare()}
}

function addSquare () {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    grid.appendChild(newDiv);
}


grid.addEventListener("mouseover", function ( event ) {
        event.target.style.backgroundColor = "red";

    })

function cellNumber () {
    cells = parseInt(prompt("How many cells per side would you like?"));
    return cells
}

function clearcells(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    
}


function myfunction() {
    clearcells (grid);
    populate(cellNumber());
    console.log(cells);
}
clear.addEventListener("click", myfunction);
