// creer la matric avec une taille de 10x20 et $grid devient la matric
const width = 10
const height = 20


function createMatric(width,height){
    let matric = []
    for(let i=0;i<height;i++){
        let layer = []
        for(let j=0;j<width;j++){
        layer.push(0)
        }
    matric.push(layer)
    }
    return matric
}

let grid = createMatric(width,height)
console.log(grid)


let TetrominosJ = {
    rotations: [
        [[0,1,0,0],
         [0,1,0,0],
         [1,1,0,0],
         [0,0,0,0]],

        [[1,0,0,0],
         [1,1,1,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[1,1,0,0],
         [1,0,0,0],
         [1,0,0,0],
         [0,0,0,0]],

        [[1,1,1,0],
         [0,0,1,0],
         [0,0,0,0],
         [0,0,0,0]],
    ],
    color: "blue"
}

let TetrominosL = {
    rotations: [
        [[1,0,0,0],
         [1,0,0,0],
         [1,1,0,0],
         [0,0,0,0]],

        [[1,1,1,0],
         [1,0,0,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[1,1,0,0],
         [0,1,0,0],
         [0,1,0,0],
         [0,0,0,0]],

        [[0,0,1,0],
         [1,1,1,0],
         [0,0,0,0],
         [0,0,0,0]],
    ],
    color: "orange"
}

let TetrominosT = {
    rotations: [
        [[0,1,0,0],
         [1,1,1,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[0,1,0,0],
         [0,1,1,0],
         [0,1,0,0],
         [0,0,0,0]],

        [[1,1,1,0],
         [0,1,0,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[0,1,0,0],
         [1,1,0,0],
         [0,1,0,0],
         [0,0,0,0]],
    ],
    color: "purple"
}

let TetrominosS = {
    rotations: [
        [[0,1,1,0],
         [1,1,0,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[1,0,0,0],
         [1,1,0,0],
         [0,1,0,0],
         [0,0,0,0]],

        [[0,1,1,0],
         [1,1,0,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[1,0,0,0],
         [1,1,0,0],
         [0,1,0,0],
         [0,0,0,0]],
    ],
    color: "green"
}

let TetrominosZ = {
    rotations: [
        [[1,1,0,0],
         [0,1,1,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[0,1,0,0],
         [1,1,0,0],
         [1,0,0,0],
         [0,0,0,0]],

        [[1,1,0,0],
         [0,1,1,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[0,1,0,0],
         [1,1,0,0],
         [1,0,0,0],
         [0,0,0,0]],
    ],
    color: "red"
}

let TetrominosI = {
    rotations: [
        [[0,0,0,0],
         [1,1,1,1],
         [0,0,0,0],
         [0,0,0,0]],

        [[0,1,0,0],
         [0,1,0,0],
         [0,1,0,0],
         [0,1,0,0]],

        [[0,0,0,0],
         [1,1,1,1],
         [0,0,0,0],
         [0,0,0,0]],

        [[0,1,0,0],
         [0,1,0,0],
         [0,1,0,0],
         [0,1,0,0]],
    ],
    color: "cyan"
}

let TetrominosO = {
    rotations: [
        [[1,1,0,0],
         [1,1,0,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[1,1,0,0],
         [1,1,0,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[1,1,0,0],
         [1,1,0,0],
         [0,0,0,0],
         [0,0,0,0]],

        [[1,1,0,0],
         [1,1,0,0],
         [0,0,0,0],
         [0,0,0,0]],
    ],
    color: "yellow"
}

let tetrominosList = [
    TetrominosJ,
    TetrominosL,
    TetrominosT,
    TetrominosS,
    TetrominosZ,
    TetrominosI,
    TetrominosO
]

let currentPiece = {
    type: TetrominosJ,
    rotationIndex: 0,
    x: 3,
    y: 0
}

function getRandomTetromino() {
    let randomIndex = Math.floor(Math.random() * tetrominosList.length)
    return tetrominosList[randomIndex]
}
function spawnNewPiece() {
    currentPiece = {
        type: getRandomTetromino(),
        rotationIndex: 0,
        x: 3,
        y: 0
    }
}
// permet de repondre la coordonée des 4 blocs d'une shape 
function defineCoordShape(shape,coordX,coordY){
    //parcour la shape
    let gridX = 0
    let gridY = 0
        for(let i =0;i<shape.length;i++){
        //parcour horizontalement la shape
        for(let j =0; j <shape[i].length;j++){
            // donne les Coordonées X et Y de chacun des blocs de la shape
                if(shape[i][j] === 1){
                    gridX = coordX + j
                    gridY = coordY + i
                    console.log(`la position X est :${gridX},la position Y est :${gridY}`)
                }
            } 
        
    }
}
// a pour fonction de ne pas depasser les limites et si tout est bon place la piece dans le grid
function canPlacePiece(shape, coordX, coordY){
    let gridX = 0
    let gridY = 0
        for(let i =0;i<shape.length;i++){
        //parcour horizontalement la shape
        for(let j =0; j <shape[i].length;j++){
            // donne les Coordonées X et Y de chacun des blocs de la shape
                if(shape[i][j] === 1){
                    gridX =  coordX + j
                    gridY = coordY + i
                    if(gridX <0 || gridX >=width || gridY >=height){
                        console.log("out of border")
                        return false
                    }if(grid[gridY][gridX] === 1){
                        console.log("deja occupé")
                        return false
                    }
                    
                } 
                
       }

    }return true
}

function lockPiece(shape, coordX, coordY){
    //parcour la shape
    let gridX = 0
    let gridY = 0
        for(let i =0;i<shape.length;i++){
        //parcour horizontalement la shape
        for(let j =0; j <shape[i].length;j++){
            // donne les Coordonées X et Y de chacun des blocs de la shape
                if(shape[i][j] === 1){
                    gridX = coordX + j
                    gridY = coordY + i
                // verouille la piece en placant un 1 dans les coordonnée des blocs
                    grid[gridY][gridX] = 1
                }
            } 
        
    }
    console.log(grid)
    return 
}

// supprime la ligne quand elle ne contien pas de 0 et puis ajoute une ligne toute en haut du grid
function clearFullLines(grid) {
    for (let i = grid.length - 1; i >= 0; i--) {
        if (!grid[i].includes(0)) {
            grid.splice(i, 1)
            grid.unshift(new Array(width).fill(0))
        }
    }
}
function moveDown(){
    if(canPlacePiece(
    currentPiece.type.rotations[currentPiece.rotationIndex],
    currentPiece.x,
    currentPiece.y + 1
        )
    ){
        //met a jour la position
        currentPiece.y++
    }else{
        // doit amener a une fonction "stopPiece"
        lockPiece(
                currentPiece.type.rotations[currentPiece.rotationIndex],
                currentPiece.x,
                currentPiece.y
            )
    }
}
function moveLeft(){
    if(canPlacePiece(
    currentPiece.type.rotations[currentPiece.rotationIndex],
    currentPiece.x - 1,
    currentPiece.y
        )
    ){
        //met a jour la position
        currentPiece.x--
    }else{
        // doit amener a une fonction "stopPiece"
        lockPiece(
                currentPiece.type.rotations[currentPiece.rotationIndex],
                currentPiece.x,
                currentPiece.y
            )
    }
}






defineCoordShape(
    currentPiece.type.rotations[currentPiece.rotationIndex],
    currentPiece.x,
    currentPiece.y
)
clearFullLines(grid)
moveDown()