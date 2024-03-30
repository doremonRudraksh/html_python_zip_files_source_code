var speechRecognition = window.webkitSpeechRecognition; //api//
var recognition = new speechRecognition(); // speech recognition is the interface of web speech api//

var text_box = document.getElementById("text_box");

function start(){
    text_box.innerHTML = "";

    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    text_box.innerHTML = content;

    console.log(content);

    if(content == "take my selfie"){
        console.log("take my selfie -----");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    
    speak_data = "Taking your selfie in 5 seconds";

    var utter_this = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_this);
    
    Webcam.attach(camera);

    setTimeout(function(){
        take_selfie();
        save();
    },5000);
}


Webcam.set({
    width: 360,
    height : 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
camera = document.getElementById("camera");

function take_selfie(){
    Webcam.snap(function(data_uri) { 
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; 
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image; 
    link.click();
}