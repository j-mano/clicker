// This script is holding general inforation of the apliction
var gold                = 0;
var arrayOfEnemies      = [];
var EnviromentObject    = [];
var generalHelth        = 5;

// Valid gamestates = "Won", "Running", "Paused", "Lost", "Error";
var gameRunState        = "Running";

function getGold(){
    return gold;
}

function getHelth(){
    return generalHelth;
}

function addgold(goldInput)
{
    gold = gold + goldInput;
}

function GetEnemies(){
    return arrayOfEnemies;
}

// id is the number aline in the arrayofenemies list
function removeEnemie(id){
    arrayOfEnemies.splice(id);
}

function addEnemie(enemyObject){
    arrayOfEnemies.push(enemyObject);
}

function GetEnviromentObjects(){
    return EnviromentObject;
}

function GetGameState(){
    return gameRunState;
}

function addToEnviromentObject(){
    
}