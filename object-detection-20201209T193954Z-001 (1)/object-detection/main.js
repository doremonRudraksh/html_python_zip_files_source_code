img = "";
model_status = "";
object = [];

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO); 
    video.size(380,380); 
    video.hide();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded(){
    console.log("Model is Initialized");
    model_status = true;
    console.log(model_status);
    
}

function gotResults(e, results){
    if(e){
        console.error(e);
    }   
    console.log(results);
    object = results;
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(video, 0,0, 380, 380);

    if(model_status != ""){
        r = random(255);
        g = random(255);
        b = random(255);

        objectDetector.detect(video, gotResults);

        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_obj").innerHTML = "No. of objects Detected are : " + object.length; 
            console.log(object.length);
            
            percent = floor(object[i].confidence * 100);
            fill(r,g,b)
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y );
            noFill();
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    
}