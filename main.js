
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
    Webcam.snap(function(data_uri){
        console.log(data_uri);
        var img_row = '<img id="resulted" src="' + data_uri + '"/>';
        document.getElementById("result").innerHTML = img_row;
    });
}

console.log("ml5 version :-" + ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-3u3MCCLw/model.json',modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function check() {
    img = document.getElementById("resulted");
    classifier.classify(img, gotResult);
    console.log(img);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(result);
        content = result[0].label;
        console.log(content);
        if(content == 'fist'){
            document.getElementById("text-result").innerHTML = content;
            document.getElementById("emoji-result").innerHTML = "&#9994;";
        }
        else if(content == 'clap'){
            document.getElementById("text-result").innerHTML = content;
            document.getElementById("emoji-result").innerHTML = "&#9995;";
        }
        else if(content == 'awsome'){
            document.getElementById("text-result").innerHTML = content;
            document.getElementById("emoji-result").innerHTML = "&#128076;";
        }
        else if(content == 'thumbs-up'){
            document.getElementById("text-result").innerHTML = content;
            document.getElementById("emoji-result").innerHTML = "&#128077;";
        }
        else if(content == 'thumbs-down'){
            document.getElementById("text-result").innerHTML = content;
            document.getElementById("emoji-result").innerHTML = "&#128078;";
        }
        abcd(content);
    }
}

function abcd(speak_data) {
    console.log("speaking");
    var synth = window.speechSynthesis;
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    UtterThis.rate = 0.5;
    synth.speak(UtterThis);
}