song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes)
}

function modelLoaded(){
    console.log("Posenet is Initialized!");
}

function draw(){
    image(video, 0,0, 600, 500);
    fill("#ff0000");
    stroke("#ff0000");
    
    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);

        if(rightWristY > 0 && rightWristY <= 100){
            document.getElementById("speed").innerHTML = "Speed = 0.5x ";
            song.rate(0.5);
        }

        else if(rightWristY > 100 && rightWristY <= 200) {
            document.getElementById("speed").innerHTML = "Speed = 1x ";
            song.rate(1);
        }

        else if(rightWristY > 200 && rightWristY <= 300){
            document.getElementById("speed").innerHTML = "Speed = 1.5x ";
            song.rate(1.5);
        }

        else if(rightWristY > 300 && rightWristY <= 400){
            document.getElementById("speed").innerHTML = "Speed = 2x ";
            song.rate(2);
        }

        else if(rightWristY > 400 && rightWristY <= 500){
            document.getElementById("speed").innerHTML = "Speed = 2.5x ";
            song.rate(2.5);
        }
    }


    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        inNumberLeftWristY = Number(leftWristY);
        removeDecimal = floor(inNumberLeftWristY);
        volume = removeDecimal/500;
        document.getElementById("volume").innerHTML = "Volume : " + volume;
        song.setVolume(volume);
    }
}

function preload(){
    song  = loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause(){
    song.pause();
}

function gotposes(result){
    if(result.length > 0){
        console.log(result);
        scoreRightWrist = result[0].pose.keypoints[10].score;
        scoreLeftWrist = result[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " + scoreRightWrist);

        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("left wrist x = "+ leftWristX + "left wrist y = " + leftWristY);

        rightWristX = result[0].pose.rightWrist.x;
        rightWristX = result[0].pose.rightWrist.y;
        console.log("right wrist x = " + rightWristX + "right wrist y = " + rightWristY);
    }

}