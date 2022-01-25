const grid = document.getElementById("container");


for (let i = 0; i < 256 ; i++)  {
    
    addSquare()
}
function addSquare () {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    grid.appendChild(newDiv);
}


grid.addEventListener("mouseover", function ( event ) {
        event.target.style.backgroundColor = "red";

    })

