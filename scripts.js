$(document).ready(function() {

    // Player Buttons
    $("#btn").on("click", function (e) {
        var audio = $("#audio")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    $("#btn1").on("click", function (e) {
        var audio = $("#audio1")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    $("#btn2").on("click", function (e) {
        var audio = $("#audio2")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    $("#btn3").on("click", function (e) {
        var audio = $("#audio3")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    $("#btn4").on("click", function (e) {
        var audio = $("#audio4")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    $("#btn5").on("click", function (e) {
        var audio = $("#audio5")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // End of Player Buttons

    // Volume Bars
    $("#volume").on("change input", function () {
        var audio  =  $("#audio")[0];
        audio.volume = $(this).val();
    });

    $("#volume1").on("change input", function () {
        var audio  =  $("#audio1")[0];
        audio.volume = $(this).val();
    });

    $("#volume2").on("change input", function () {
        var audio  =  $("#audio2")[0];
        audio.volume = $(this).val();
    });

    $("#volume3").on("change input", function () {
        var audio  =  $("#audio3")[0];
        audio.volume = $(this).val();
    });

    $("#volume4").on("change input", function () {
        var audio  =  $("#audio4")[0];
        audio.volume = $(this).val();
    });

    $("#volume5").on("change input", function () {
        var audio  =  $("#audio5")[0];
        audio.volume = $(this).val();
    });

      // End of the Volume Bars

    $(function() {

      var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';


      $( '.play-btn' ).click(function( e ) {

        e.preventDefault();

        if ( $(this).hasClass('stop') ) {

          $( this ).removeClass( 'stop' )
                   .addClass( 'to-play' );

        } else if ( !$(this).hasClass('to-play') ) {

          $( this ).addClass( 'stop' );

        }

      });

    $( document ).on( transitionEnd, '.to-play', function() {

      $( this ).removeClass( 'to-play' );

    });

    });

  // The Drop Down Menu
  (function(){

    $("#list").on("click", function() {
      $(".notepad").fadeToggle( "fast");
    });

  })();

  // Task List
  var count = 5;

  add_task();
  delete_task();

  function add_task() {

    $('.add-new-task').submit(function(){
      var new_task = $('.add-new-task input[name=new-task]').val();
      count = count + 1;

      var print = '<li><span>' + new_task + '</span><button id="' + count + '" class="delete-button">X</button></li>';

      if(new_task !== ''){
        $('.add-new-task input[name=new-task]').val('');
        $(print).appendTo('.task-list ul').hide().fadeIn();
        delete_task();
      }
      return false;
    });
  }

  function delete_task() {
    $('.delete-button').click(function(){
      var current_element = $(this);
      var id = $(this).attr('id');
      current_element.parent().fadeOut("fast", function() { $(this).remove(); });
    });
  }

});
