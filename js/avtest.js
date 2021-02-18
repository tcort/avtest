function init() {

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        }).then(function(stream) {

            const avtest = document.getElementById('avtest');
            avtest.srcObject = stream;
            avtest.play();


            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();

            const source = ctx.createMediaStreamSource(stream);

            const delay = ctx.createDelay();
            delay.delayTime.value = 5;

            source.connect(delay);
            delay.connect(ctx.destination);


        });
    }
}

window.onload = init;
