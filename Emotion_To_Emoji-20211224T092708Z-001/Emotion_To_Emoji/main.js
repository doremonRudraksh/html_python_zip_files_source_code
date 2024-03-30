https://teachablemachine.withgoogle.com/models/aqRtlmyPg/   

prediction_1 = "";
prediction_2 = "";

Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='emotion' src='"+data_uri+"'>";
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aqRtlmyPg/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first Prediction is " + prediction_1;
    speak_data_2 = "the second prediction is " + prediction_2;
    
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById("emotion");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        //these emojis are for prediction 1//

        if(prediction_1 == "happy"){
            document.getElementById("updated_emoji").innerHTML = "&#128522;";
        }

        if(prediction_1 == "sad"){
            document.getElementById("updated_emoji").innerHTML = "&#128532;";
        }

        if(prediction_1 == "angry"){
            document.getElementById("updated_emoji").innerHTML = "&#128548;";
        }

        //these emojis are for prediction 2//

        if(prediction_2 == "happy"){
            document.getElementById("updated_emoji1").innerHTML = "&#128522;";
        }

        if(prediction_2 == "sad"){
            document.getElementById("updated_emoji1").innerHTML = "&#128532;";
        }

        if(prediction_2 == "angry"){
            document.getElementById("updated_emoji1").innerHTML = "&#128548;";
        }
    }
}