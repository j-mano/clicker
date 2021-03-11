function spawnUpdate(){
}

function SpawnerStart(){
    InstaniateEnemies();
}

function prepEnemies(){

}

function InstaniateEnemies(){
    addStickman();
}

function addStickman(){
    var enemy       = enemyObject;
    var stickman    = StickPerson;

    enemy.Name          = stickman.name;
    enemy.PosX          = 150;
    enemy.PosY          = 150;
    enemy.armor         = stickman.armor;
    enemy.ImageName     = "Stickfigure";
    enemy.Width         = 50;
    enemy.Height        = 50;

    addEnemie(enemy)
}