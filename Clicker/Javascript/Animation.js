function DrawUpdate(){
    clearcanvas();
    DrawEnviroment();
    drawEnemies();

    // Update last. interface
    printoutUpdate();
}

// Loading in the images / sprites of all enemies. Add them here to animate it. Dont Forget to add the if code in the foreachcode.
var StickFigure = new Image();
StickFigure.src = "Graphics/Enemies/Stick-figure.png";
var Bird        = new Image();
Bird.src        = "Graphics/Enemies/Stick-figure.png";
var Orge        = new Image();
Orge.src        = "Graphics/Enemies/Grinning_Orge.png";

function drawEnemies(){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");

    var enemies = GetEnemies();
    console.log(enemies);

    // The name of the Imagages are the images of the files of images as of in enemies.js file.
    enemies.forEach(Enemy => {
        switch(Enemy.ImageName) {
            case "Stickfigure":
              ctx.drawImage(StickFigure, Enemy.PosX, Enemy.PosY, Enemy.Width, Enemy.Height);
              break;
            case "StandardBird":
              ctx.drawImage(Bird, Enemy.PosX, Enemy.PosY, Enemy.Width, Enemy.Height);
              break;
            case "Orge":
              ctx.drawImage(Orge, Enemy.PosX, Enemy.PosY, Enemy.Width, Enemy.Height);
              break;
            default:
              ctx.drawImage(StickFigure, Enemy.PosX, Enemy.PosY, Enemy.Width, Enemy.Height);
          }
    });
}

// Load in Images for the enviroments objects.
var Castle = new Image();
Castle.src  = "Graphics/Enviroment/castle.png";
var Tree    = new Image();
Tree.src    = "Graphics/Enviroment/Tree.png";
var treeSizeX = 50;
var treeSizeY = 50;

function DrawEnviroment(){
    DrawBackground();

    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");

    // Castle
    ctx.drawImage(Castle , (canvas.width / 4) * 3, (canvas.height / 4) * 2.75, treeSizeX * 2, treeSizeY * 2);
    
    // Trees
    ctx.drawImage(Tree, (canvas.width / 4) * 3.5, (canvas.height / 4) * 3.5, treeSizeX, treeSizeY);
    ctx.drawImage(Tree, (canvas.width / 4) * 3.5, (canvas.height / 4) * 2.5, treeSizeX, treeSizeY);
}

// The background of the image.
var Background = new Image();
Background.src  = "Graphics/Maps/ImageMap.png";

function DrawBackground(){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");
    ctx.drawImage(Background, 0, 0, canvas.width, canvas.height);
}

function clearcanvas(){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}