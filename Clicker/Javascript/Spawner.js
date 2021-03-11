var lvl = 0;

function spawnUpdate(){
    
}

function SpawnerStart(){
    setInterval(myTimer, 5000);
    setInterval(addLvl, 50000);
}

function myTimer() {
    InstaniateEnemies();
}

function addLvl(){
    lvl = lvl + 1;
}

function InstaniateEnemies(){
    switch(lvl) {
        case 0:
            addStickman(75,350);
            addStickman(50,250);
          break;
        case 1:
            addOrgr(75,350);
            addStickman(50,250);
          break;
        case 2:
            addOrgr(50,250);
            addStickman(75,350);
          break;
        default:
            addStickman(75,350);
            break;
      }
}

function addStickman(PosX, PosY){
    var enemyObject = {Name:"", Helht:"", armor:"",Flying:"",PosX:"",PosY:"",ImageName:"",Width:"",Height:"", top:""}
    var stickman    = StickPerson;

    enemyObject.Name          = stickman.name;
    enemyObject.PosX          = PosX;
    enemyObject.PosY          = PosY;
    enemyObject.ImageName     = "Stickfigure";
    enemyObject.Width         = 25;
    enemyObject.Height        = 50;
    enemyObject.top           = 0;

    addEnemie(enemyObject)
}

function addOrgr(PosX, PosY){
    var enemyObject = {Name:"", Helht:"", armor:"",Flying:"",PosX:"",PosY:"",ImageName:"",Width:"",Height:"", top:""}
    var orge = Orge;

    enemyObject.Name          = orge.name;
    enemyObject.PosX          = PosX;
    enemyObject.PosY          = PosY;
    enemyObject.ImageName     = "Orge";
    enemyObject.Width         = 50;
    enemyObject.Height        = 75;
    enemyObject.top           = 10;

    addEnemie(enemyObject)
}

function addBird(PosX, PosY){
    var enemyObject = {Name:"", Helht:"", armor:"",Flying:"",PosX:"",PosY:"",ImageName:"",Width:"",Height:"", top:""}
    var bird    = Bird;

    enemyObject.Name          = bird.name;
    enemyObject.Flying        = true;
    enemyObject.PosX          = PosX;
    enemyObject.PosY          = PosY;
    enemyObject.ImageName     = "Bird";
    enemyObject.Width         = 15;
    enemyObject.Height        = 30;
    enemyObject.top           = 10;

    addEnemie(enemyObject)
}