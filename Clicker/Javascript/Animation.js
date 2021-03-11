function DrawUpdate(){
    clearcanvas();
    printoutUpdate();
    drawEnemies();
}

function drawEnemies(){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");

    var enemies = GetEnemies();

    var StickFigure = new Image();                          // Create new img element
    StickFigure.src = "Graphics/Enemies/Stick-figure.png";  // Set source path

    enemies.forEach(Enemy => {
        if(Enemy.ImageName == "Stick-figure"){
            ctx.drawImage(StickFigure, Enemy.PosX, Enemy.PosY, Enemy.width, Enemy.height);
        }
    });
}

function clearcanvas(){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
