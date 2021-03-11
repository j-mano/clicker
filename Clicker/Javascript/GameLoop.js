//Aplication Update function. Updating then it can.

window.requestAnimationFrame(gameLoop);
start();

function gameLoop() {
    spawnUpdate();
    DrawUpdate();
    window.requestAnimationFrame(gameLoop);
}

function start(){
    SpawnerStart();
}