let input = document.getElementById('input');
let microphone = document.getElementById('microphone');
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
    let recognition = new webkitSpeechRecognition();

    microphone.addEventListener('click', function() {
        recognition.start();
    });
    recognition.addEventListener("result", function(e){
      var trans = e.results[0][0].transcript;
      input.value = trans;
    });
}
else{
    alert(`
    Your Browser Does't Support😥😥
    -- Please Try Chrome Or Edge Browser😀😀
    `)
}