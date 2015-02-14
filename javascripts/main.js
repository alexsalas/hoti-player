audiojs.events.ready(function() {
  var audios = document.getElementsByTagName('audio');

  var a1 = audiojs.create(audios[0], {
    css: false,
    trackEnded: function() {
      a1.load("http://api.soundcloud.com/tracks/120485350/stream?client_id=43195eb2f2b85520cb5f65e78d6501bf");
      a1.play();
    },
    createPlayer: {
      markup: false,
      playPauseClass: 'play-pauseZ',
      scrubberClass: 'scrubberZ',
      progressClass: 'progressZ',
      loaderClass: 'loadedZ',
      timeClass: 'timeZ',
      durationClass: 'durationZ',
      playedClass: 'playedZ',
      errorMessageClass: 'error-messageZ',
      playingClass: 'playingZ',
      loadingClass: 'loadingZ',
      errorClass: 'errorZ'
    }
  });
  
  a1.load('http://api.soundcloud.com/tracks/117663635/stream?client_id=43195eb2f2b85520cb5f65e78d6501bf');
});