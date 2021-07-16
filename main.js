function preload(){}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Gez-b5fh1/model.json",modelloaded);
}
function modelloaded(){

console.log("model loaded successfully");
}

function draw(){
    image(webcam,0,0,300,300);
    classifier.classify(webcam,getResult);
}
function getResult(E,R){
    if(E){
        console.error(E);
    }
    else{
        //console.log(R);
        object_name=R[0].label;
        Object_accuracy=R[0].confidence.toFixed(3);
        document.getElementById("object_name").innerHTML=object_name;
        document.getElementById("object_accuracy").innerHTML=Object_accuracy;
    }
}