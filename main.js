// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event) {
    let audioKeyCode = getKeyCode(event);

    const key = document.querySelector(`.key[data-key = "${audioKeyCode}"]`);
    if(!key) {
        return;    
    }

    playAudio(audioKeyCode);
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown";
    keyCode = isKeyboard ? event.keyCode : event.target.dataset.key;
    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key = "${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

// click with mouse
keys.forEach(key => key.addEventListener("click", playNote));

// keyboard type
window.addEventListener("keydown", playNote);