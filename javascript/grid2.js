function grid () {
    userInput = document.querySelector("#userInput")
    userColor1 = document.querySelector("#userFirstColor")
    userColor2 = document.querySelector("#userSecondColor")
    userGapSize = document.querySelector("#userGapSize")
    squareSize = '60px';
    gapSize = userGapSize.value;
    lightColor = userColor1.value
    darkColor = userColor2.value
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
    emptySpace = document.createElement('p')
    emptySpace.innerText = " "
    text.appendChild(container)
    text.appendChild(emptySpace)
    num = 3.2;
    console.log(userColor1)
}
// grid();