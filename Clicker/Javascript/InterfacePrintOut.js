
function printoutUpdate(){
    PrintOutGold(getGold())
}

function PrintOutGold(goldamount){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");

    var GameState = GetGameState()

    ctx.font = "24px Arial";
    ctx.fillText("Amount of gold: " + goldamount, (canvas.clientWidth / 46), (canvas.clientHeight / 16));
    ctx.fillText("RunningState: " + GameState, (canvas.clientWidth / 46) , (canvas.clientHeight / 8));
    ctx.fillText("Click all enemies!!", (canvas.clientWidth / 46) , (canvas.clientHeight / 6));
}

function PrintOutEnemies(){

}