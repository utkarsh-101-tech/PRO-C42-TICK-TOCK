var hr, sc, mn;

function preload() {

    snd = loadSound("clock-ticking-2.mp3");
}

function setup() {
    createCanvas(displayWidth / 2, displayHeight / 2);

}

function draw() {
    background(0);
    hr = hour();
    sc = second();
    mn = minute();
    angleMode(DEGREES);
    if (frameCount % 0 == 0) {
        snd.play();
    } else {
        snd.stop();
    }
    fill("black");
    stroke("yellow");
    strokeWeight(10);
    ellipse(width / 2, height / 2, 500, 500);

    angleSc = map(sc, 0, 60, 0, 360);
    angleMn = map(mn, 0, 60, 0, 360);
    angleHr = map(hr % 12, 0, 60, 0, 360);

    //hour arc
    push();
    translate(width / 2, height / 2);
    fill("black");
    stroke("red");
    strokeWeight(10);
    angleMode(DEGREES);
    arc(0, 0, 475, 475, -90, angleHr);
    pop();

    //second arc
    push();
    translate(width / 2, height / 2);
    fill("black");
    stroke("green");
    strokeWeight(10);
    angleMode(DEGREES);
    arc(0, 0, 450, 450, -90, angleSc);
    pop();

    //minute arc
    push();
    translate(width / 2, height / 2);
    fill("black");
    stroke("blue");
    strokeWeight(10);
    angleMode(DEGREES);
    arc(0, 0, 425, 425, -90, angleMn);
    pop();


    //second hand
    push();
    translate(width / 2, height / 2);
    angleMode(DEGREES);
    rotate(angleSc);
    stroke("green");
    strokeWeight(10);
    line(0, 0, 200, 0);
    pop();

    //mninute hand
    push();
    translate(width / 2, height / 2);
    angleMode(DEGREES);
    rotate(angleMn);
    stroke("blue");
    strokeWeight(10);
    line(0, 0, 170, 0);
    pop();

    //hour hand
    push();
    translate(width / 2, height / 2);
    angleMode(DEGREES);
    rotate(angleHr);
    stroke("red");
    strokeWeight(10);
    line(0, 0, 140, 0);
    pop();


}