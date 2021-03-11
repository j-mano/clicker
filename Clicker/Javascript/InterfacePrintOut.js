
function printoutUpdate(){
    PrintOutGold(getGold())
}

function PrintOutGold(goldamount){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");

    var GameState = GetGameState()

    ctx.font = "30px Arial";
    ctx.fillText("Amount of gold: " + goldamount, 10, 40);
    ctx.fillText("RunningState: " + GameState, 10, 40);
}

function PrintOutEnemies(){

}