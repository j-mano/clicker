function spawnUpdate(){
}

function SpawnerStart(){
    setInterval(myTimer, 5000);
}

function myTimer() {
    InstaniateEnemies();
}

function InstaniateEnemies(){
    addStickman(75,350);
    addStickman(50,250);
}

function addStickman(PosX, PosY){
    var enemyObject = {Name:"", Helht:"", armor:"",Flying:"",PosX:"",PosY:"",ImageName:"",Width:"",Height:""}
    var stickman    = StickPerson;

    enemyObject.Name          = stickman.name;
    enemyObject.PosX          = PosX;
    enemyObject.PosY          = PosY;
    enemyObject.ImageName     = "Stickfigure";
    enemyObject.Width         = 25;
    enemyObject.Height        = 50;

    addEnemie(enemyObject)
}