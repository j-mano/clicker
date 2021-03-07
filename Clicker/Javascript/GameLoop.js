//Aplication Update function. Updating then it can.

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    spawnUpdate();
    DrawUpdate();
    window.requestAnimationFrame(gameLoop);
}