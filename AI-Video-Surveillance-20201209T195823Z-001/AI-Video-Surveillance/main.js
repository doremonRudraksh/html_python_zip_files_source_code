video = "";
status = "";
objects = [];

function setup(){
   canvas =  createCanvas(480,380);
   canvas.center();

}


function preload(){
   video = createVideo("video.mp4");
   video.hide();
}

function draw(){
   image(video,0,0,480,380)

   if(status != ""){
      objectDetector.detect(video, gotResults);
      
      for(i=0; i<objects.length; i++){
         document.getElementById("status").innerHTML = "objects Detected ";
         document.getElementById("number_of_obj").innerHTML = "Number of objects Detected " + objects.length;

         fill("#ff0000");
         percent  = floor(objects[i].confidence * 100);
         text(objects[i].label + " " + percent + "% ", objects[i].x+ 15, objects[i].y + 15);
         noFill()
         stroke("#ff0000");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

      }
   }
}

function start(){
   objectDetector =  ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status").innerHTML = "Detecting Objects ";
}

function modelLoaded(){
   console.log("Model is Intialized");
   status = true;
   video.loop();
   video.volume(1);
   video.speed(1);
}

function gotResults(error, results){
   if(error){
      console.error(error);
   }
   console.log(results);
   objects = results;

}






























//integer , string , boolien , float , char or character//