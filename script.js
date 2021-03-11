window.addEventListener('keydown', playSound);

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const letter = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(e.keyCode);
    if(!audio)return
    audio.currentTime = 0
    audio.play()
    letter.classList.add("playing")
}

const allLetters = document.querySelectorAll('.key')
allLetters.forEach(element => {
    element.addEventListener('transitionend', function(e){
        if(e.propertyName !== 'transform')return
        this.classList.remove("playing")
    })
})