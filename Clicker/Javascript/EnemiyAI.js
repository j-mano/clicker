function EnemiesAIUpdatere(){
    MovesToCastle();
    ValidateEnemiesInLocation();
}

function MovesToCastle(){
    // Moves all enemies to the right side on the program.
    GetEnemies().forEach(Enemy => {
        Enemy.PosX = Enemy.PosX + 0.2;
    });
}

function ValidateEnemiesInLocation(){
    var canvas  = document.getElementById("GameCanvas");

    var XLocationLimit = (canvas.PosX / 5) * 4

    GetEnemies().forEach(Enemy => {
        if(XLocationLimit > Enemy.PosX){
            gameRunState = "Won"
        }
    });
}