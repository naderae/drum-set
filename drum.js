



window.addEventListener('keydown', function(e){


  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); /// select audio associated with the eventt
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // select the keyboard key associated with the event

  // 1) play the audio

  if (audio) {
    audio.play();
    audio.currentTime = 0;  // rewinds to the start
    key.classList.add('playing');
  } else {
    return
  };



  var removeTransition = function(){   // an event is fired after an element finishes transitioning, for each element that is transitioned.
      this.classList.remove('playing'); // this refers to the object the function was CALLED on!!
    };



  var keys = document.querySelectorAll('.key');

  keys.forEach(function(current){
    current.addEventListener('transitionend', removeTransition);
  });

});
