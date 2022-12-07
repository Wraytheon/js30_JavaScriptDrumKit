window.addEventListener("keydown", function(e) {
  console.log(e.keyCode)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
  /* uses attribute selector and templatel literal to select the audio elements that have a data-key value of whatever key is pressed */
  audio.play()
})

