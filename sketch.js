var h = hour();

function setup() {
    createCanvas(800, 400);
    // createSprite(400, 200, 50, 50);
}

function draw() {
    background(255, 255, 255);
    text("hour:/" + h, 400, 200);
    drawSprites();
}