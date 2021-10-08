nose_X = 0;
nose_Y = 0;
difference = 0;
rigthWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function draw() {
    background('#87CEEB');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}