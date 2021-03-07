function DrawUpdate(){
    clearcanvas();
    printoutUpdate();
}

function clearcanvas(){
    var canvas  = document.getElementById("GameCanvas");
    var ctx     = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
