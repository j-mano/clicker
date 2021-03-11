function DrawUpdate(){
    clearcanvas();
    printoutUpdate();
    DrawEnviroment();
    drawEnemies();
}

var StickFigure = new Image();
StickFigure.src = "Graphics/Enemies/Stick-figure.png";
var Bird = new Image();
Bird.src = "Graphics/Enemies/Stick-figure.png";
var Orge = new Image();
Orge.src = "Graphics/Enemies/Grinning_Orge.png";

function drawEnemies(){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");

    var enemies = GetEnemies();

    // The name of the Imagages are the images of the files of images as of in enemies.js file.
    enemies.forEach(Enemy => {
        if(Enemy.ImageName == "Stickfigure"){
            ctx.drawImage(StickFigure, Enemy.PosX, Enemy.PosY, Enemy.Width, Enemy.Height);
        }
        
        if(Enemy.ImageName == "StandardBird"){
            ctx.drawImage(Bird, Enemy.PosX, Enemy.PosY, Enemy.Width, Enemy.Height);
        }

        if(Enemy.ImageName == "Orge"){
            ctx.drawImage(Orge, Enemy.PosX, Enemy.PosY, Enemy.Width, Enemy.Height);
        }
    });
}

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
    ctx.drawImage(Tree, (canvas.width / 4) * 3.5, (canvas.height / 4) * 3.5, treeSizeX, treeSizeY);
    ctx.drawImage(Tree, (canvas.width / 4) * 3.5, (canvas.height / 4) * 2.5, treeSizeX, treeSizeY);
}

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