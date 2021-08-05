Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
   width: 350,
   height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NxVU6fXTM/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
    img = document.getElementById('captured_image');
    Classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById('result_gesture_name').innerHTML = results[0].label;
        document.getElementById('result_gesture_name2').innerHTML = results[1].label;
        Prediction_1 = results[0].label;
        Prediction_2 = results[1].label;
         
        if(results[0].label == "Amazing" ){
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if(results[0].label == "Wave" ){
            document.getElementById("update_gesture").innerHTML = "&#9995;";
        }
        if(results[0].label == "Victory"){
            document.getElementById("update_gesture").innerHTML = "&#129304;";
        }
        if(results[0].label == "Best"){
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "Clap"){
            document.getElementById("update_gesture").innerHTML = "&#128079;";
        }


        if(results[1].label ==" Amazing" ){
            document.getElementById("update_gesture2").innerHTML = "&#128076;";
        }
        if(results[1].label == "Wave" ){
            document.getElementById("update_gesture2").innerHTML = "&#9995;";
        }
        if(results[1].label == "Victory"){
            document.getElementById("update_gesture2").innerHTML = "&#129304;";
        }
        if(results[1].label == "Best"){
            document.getElementById("update_gesture2").innerHTML = "&#128077;";
        }
        if(results[1].label == "Clap"){
            document.getElementById("update_gesture2").innerHTML = "&#128079;";
        }
    }
}