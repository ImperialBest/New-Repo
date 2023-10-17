// var person = () => {
//     console.log("Hello")
// }
function Question() {
    colInput = document.createElement("input")
    colInput.type = "number"
    colLabel = document.createElement("label")
    colLabel.innerText = "Number Of Columns"
    body = document.body;
    body.appendChild(colLabel)
    body.appendChild(colInput)
    colLabel.for = "yes"
    colInput.id = "yes"
    colInput.placeholder = "Enter number of columns"
    console.log(colLabel.for)
}
var Inputs = {
    numberOfColumns: 8,
    firstColor: "Burlywood",
    secondColor: "Brown",
    gapSize: "1px",
    changeDiagonalColor: "Darkred"
}


function grid () {
    userInput = document.querySelector("#userInput")
    userColor1 = document.querySelector("#userFirstColor")
    userColor2 = document.querySelector("#userSecondColor")
    userGapSize = document.querySelector("#userGapSize")
    userDiagonalColor = document.querySelector("#colorChanging")
    squareSize = '60px';
    gapSize = userGapSize.value;
    lightColor = userColor1.value
    darkColor = userColor2.value
    diagColor = userDiagonalColor.value
    fullName = []
    colNo = userInput.value;
    numberOfColumn = Math.floor(colNo);
    boxCount = Math.pow(numberOfColumn,2);
    squareArray = [squareSize, squareSize, squareSize]
    text = document.body;
    userValue = userInput.value
    container = document.createElement("div");
    container.style.display = 'grid';    



    for(var j = 0; j < numberOfColumn; j++) {
        fullName.push(squareSize)
    }
    res = fullName.join(" ");
    container.style.gridTemplateRows = res;
    container.style.gridTemplateColumns = res;
    container.style.gap = gapSize;
    
    for(var i = 1; i<=boxCount; i++){
        currentRow = Math.ceil(i/numberOfColumn)
        elements = document.createElement("div")
        if(numberOfColumn%2 == 0){
            if(currentRow%2 != 0){
                elements.style.backgroundColor = i%2 == 0? lightColor: darkColor
            } 
            else{
                elements.style.backgroundColor = i%2 == 0? darkColor: lightColor
            }
        }
        else{
            elements.style.backgroundColor = i%2 == 0? lightColor: darkColor
        }
        container.appendChild(elements)
    }
    var children = container.children
    for(i=0;i<numberOfColumn;i++){
        toChange = (i + (numberOfColumn*i))
        children[toChange].style.backgroundColor = diagColor
    }
    emptySpace = document.createElement('p')
    emptySpace.innerText = " "
    text.appendChild(container)
    text.appendChild(emptySpace)
    num = 3.2;
    // console.log(children.length)
}

// person
grid();
Question();
