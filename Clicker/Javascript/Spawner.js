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

function addOrgr(PosX, PosY){
    var enemyObject = {Name:"", Helht:"", armor:"",Flying:"",PosX:"",PosY:"",ImageName:"",Width:"",Height:""}
    var orge = Orge;

    enemyObject.Name          = stickman.name;
    enemyObject.PosX          = PosX;
    enemyObject.PosY          = PosY;
    enemyObject.ImageName     = "Orge";
    enemyObject.Width         = 50;
    enemyObject.Height        = 75;

    addEnemie(enemyObject)
}

function addBird(PosX, PosY){
    var enemyObject = {Name:"", Helht:"", armor:"",Flying:"",PosX:"",PosY:"",ImageName:"",Width:"",Height:""}
    var bird    = Bird;

    enemyObject.Name          = stickman.name;
    enemyObject.Flying        = true;
    enemyObject.PosX          = PosX;
    enemyObject.PosY          = PosY;
    enemyObject.ImageName     = "Bird";
    enemyObject.Width         = 15;
    enemyObject.Height        = 30;

    addEnemie(enemyObject)
}