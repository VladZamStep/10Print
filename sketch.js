let x = 0;
let y = 0;
let space = 40;

function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    stroke(30, 144, 255);
    if (random(1) < 0.5) {
        line(x, y, x + space, y + space);
    }
    else line(x, y + space, x + space, y);
    x = x + space;
    if (x > width) {
        x = 0;
        y = y + space;
    }
}

