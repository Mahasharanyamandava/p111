https://teachablemachine.withgoogle.com/models/vGlqe7EEf/
prediction_1= "";

Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quaility:90
})

camera = document.getElementById("camera");
Webcam.attach('#camera')

function snapShot() 
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vGlqe7EEf/',modelLoaded);

function modelLoaded() {
console.log('Model Loaded !')
}

function speak() {
var synth = window.SpeechSynthesis;
speak_data_1 = "the  prediction is - " + prediction_1;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}