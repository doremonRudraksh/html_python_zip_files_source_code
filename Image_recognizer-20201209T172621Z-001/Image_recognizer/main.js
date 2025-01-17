//https://teachablemachine.withgoogle.com/models/0Xr59ygMs/\

Webcam.attach('#camera')
 
camera = document.getElementById("camera");

Webcam.set({
    width:300,
    height: 400,
    image_format: ".png",
    png_quality:90

});

function take_snapshot(){
    Webcam.snap(function(data_uri){    
        document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='selfie_image'>";
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0Xr59ygMs/model.json", model_loaded)

function model_loaded(){
    console.log("model loaded");
}

function check(){
    img = document.getElementById("selfie_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_obj_name").innerHTML = results[0].label;
        document.getElementById("result_obj_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}




