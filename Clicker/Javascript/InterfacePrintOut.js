// Everything in this js is with canvas interface and information printout to do with
function printoutUpdate(){
    PrintOutGold(getGold())
}

function PrintOutGold(goldamount){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");

    ctx.font = "30px Arial";
    ctx.fillText("Amount of gold: " + goldamount, 10, 50);
}

function PrintOutEnemies(){

}