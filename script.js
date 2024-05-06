const keys = document.querySelectorAll(".key");

function playNote(event) {
    const audioKeyCode = getKeyCode(event);

    const key = document.querySelector(`.key[data-key = "${audioKeyCode}"]`);
    
    if(!key) {
        return;
    }
    
    addClassPlaying(key);
    playAudio(audioKeyCode);
}

function getKeyCode(event) {
    let keyCode;

    event.type == "keydown" ? keyCode = event.keyCode : keyCode = event.target.dataset.key;
    
    return keyCode;
}

function playAudio(keyCode) {
    const audio = document.querySelector(`audio[data-key = "${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

function addClassPlaying(key) {
    key.classList.add("playing");
}

function removeClassPlaying(event) {
    event.target.classList.remove("playing");
}

function registerEvents() {
    keys.forEach(element => {
        element.addEventListener("click", playNote);
        element.addEventListener("transitionend", removeClassPlaying);    
    });
    
    window.addEventListener("keydown", playNote);
}

window.addEventListener("load", registerEvents);