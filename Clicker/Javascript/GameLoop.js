//Aplication Update function. Updating then it can.

window.requestAnimationFrame(gameLoop);
start();

function gameLoop() {
    var gamestate = GetGameState();

    // The state must be running to run here.
    if(gamestate == "Running"){
        EnemiesAIUpdatere();
        spawnUpdate();
        DrawUpdate();
    }
    else{
        // Update last
        printoutUpdate();
    }
    
    // Gui interface is updated from interface.
    window.requestAnimationFrame(gameLoop);
}

function start(){
    SpawnerStart();
}