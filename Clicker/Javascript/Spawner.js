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
    var enemy = enemyObject;
    var stickman = StickPerson;

    enemy.Name          = stickman.name;
    enemy.PosX          = stickman.PosX;
    enemy.PosY          = stickman.PosY;
    enemy.armor         = stickman.armor;
    enemy.ImageName     = stickman.ImageName;
    enemy.Width         = stickman.Width;
    enemy.Height        = stickman.Height;

    addEnemie(enemy)
}