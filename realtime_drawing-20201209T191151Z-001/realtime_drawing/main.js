nose_x = 0;
nose_y = 0;
leftwrist_x = 0;
rightwrist_x = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,400)
    canvas.position(560,150)

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("Posenet is Intialized! ")
}

function draw(){
    background("#969A97");
    document.getElementById("square_side").innerHTML = "Width and Height of the square = " + difference + "px";
    fill("#f90093");
    stroke("#f90093");
    square(nose_x, nose_y, difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        console.log("Nose X" + nose_x + "Nose Y " + nose_y);

        leftwrist_x = results[0].pose.leftWrist.x;
        rightwrist_x = results[0].pose.rightWrist.x;
    
        difference = floor(leftwrist_x - rightwrist_x);

        console.log("Left Wrist X = " + leftwrist_x + "Right Wrist X = " + rightwrist_x + "Difference" + difference);

    }
}