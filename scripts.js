// Audio Player
$(function() {
  var audioElement = $("<audio>");

  function setVolume(myVolume) {
    if (audioElement != undefined) {
      audioElement.volume = 0.5;
    }
  }

  $("#volume, #volume1, #volume2, #volume3, #volume4, #volume5").slider({
    min: 0,
    max: 1,
    value: 0,
    step: 0.1,
    range: "min",
    slide: function(event, ui) {
      setVolume(ui.value);
    }
  });
});
