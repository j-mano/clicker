// This script is holding general inforation of the apliction
var gold                = 0;
var arrayOfEnemies      = [];
var EnviromentObject    = [];
var generalHelth        = 5;

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

function addEnemie(enemyObject){
    arrayOfEnemies.push(enemyObject);

    console.log(enemyObject);
}

function GetEnviromentObjects(){
    return EnviromentObject;
}

function addToEnviromentObject(){
    
}