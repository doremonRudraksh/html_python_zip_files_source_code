https://teachablemachine.withgoogle.com/models/jdidRcCsA/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jdidRcCsA/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
        random_r = Math.floor(Math.random()*255) + 1;
        random_g = Math.floor(Math.random()*255) + 1;
        random_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear- " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+"%"

        document.getElementById("result_label").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if(results[0].label == "Background Noise"){
            img1.src = "../alien-01.png";
            img2.src = ".//alien-02.png";
            img3.src = ".//alien-03.png";
            img4.src = "../alien-04.gif";
        }
        else if(results[0].label == "clap"){
            img1.src = "alien-01.gif";
            img2.src = "alien-02.png";
            img3.src = "alien-03.png";
            img4.src = "alien-04.png";
        }
        else if(results[0].label == "bell"){
            img1.src = "alien-01.png";
            img2.src = "alien-02.gif";
            img3.src = "alien-03.png";
            img4.src = "alien-04.png";
        }
        else if(results[0].label == "snap"){
            img1.src = "alien-01.png";
            img2.src = "alien-02.png";
            img3.src = "alien-03.gif";
            img4.src = "alien-04.png";
        }
     }

}