const king = document.querySelector(".chess-piece")
const squares = document.querySelectorAll(".square")
const infoDisplay = document.querySelector("#info")

king.addEventListener("drag", dragging)

king.addEventListener("dragstart", dragStart)

squares.forEach(square => {
    square.addEventListener("dragover", dragOver)
    square.addEventListener("dragenter", dragEnter)
    square.addEventListener("dragleave", dragLeave)
    square.addEventListener("drop", drop)
    square.addEventListener("dragend", dragEnd)
})

let beingDragged


function dragStart(e) {
    beingDragged = e.target
    console.log("dragging has started on " + beingDragged.id);
}

function dragging() {
    console.log(beingDragged.id + " is being dragged")
    infoDisplay.textContent = beingDragged.id + " is being dragged."
}


function dragOver(e) {
    e.preventDefault()
    console.log("You are dragging over " + e.target.classList)
}

function dragEnter(e) {
    e.target.classList.add("highlight")
    console.log("You are entering the space of " + e.target.classList)
}

function dragLeave(e) {
    console.log("You are leaving the space of " + e.target.classList)
    e.target.classList.remove("highlight")
}

function drop(e) {
    console.log("You have dropped something into " + e.target.classList)
    e.target.append(beingDragged)
}

function dragEnd(e) {
    console.log("The drag has ended in " + e.target.classList)
}



