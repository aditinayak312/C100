var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function begin(){
    document.getElementById("textBox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }

}
 function speak(){
     var synth=window.speechSynthesis;
    speakData="taking your selfie in 2 seconds";

    var UtterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(UtterThis);
    Webcam.attach("#camera");
    setTimeout(function(){
        selfie();
        save();
    },2000);

 }
 Webcam.set({
     width:360,
     height:300,
     image_format:'png',
     png_quality:100
 });
 var cam=document.getElementById("camera");
 function selfie(){
     Webcam.snap(function(data_uri){
         document.getElementById("pic").innerHTML='<img id="photo" src="'+data_uri+'">';
     });
 }
function save(){
    link=document.getElementById("saved");
    picture=document.getElementById("photo").src;
    link.href=picture;
    link.click();
}