
$(document).ready(function () {
  
    'use strict';
    
     var c, currentScrollTop = 0,
         navbar = $('nav');
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b) {
          navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });
    
  });
  
  
  function fadeInPage() {
      if (!window.AnimationEvent) { return; } 
      var fader = document.getElementById('fader');
      fader.classList.add('fade-out');
  
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
  
     if (!window.AnimationEvent) { return; }
    var anchors = document.getElementsByTagName('a');
     /*var anchors = document.getElementsByClassName('content');*/
      
      for (var idx=0; idx<anchors.length; idx+=1) {
        if (anchors[idx].hostname !== window.location.hostname ||
              anchors[idx].pathname === window.location.pathname) {
              continue;
          }
  
       anchors[idx].addEventListener('click', function(event) {
              var fader = document.getElementById('fader'),
                  anchor = event.currentTarget;
              
              var listener = function() {
                  window.location = anchor.href;
                  fader.removeEventListener('animationend', listener);
              };
              fader.addEventListener('animationend', listener);
              
              event.preventDefault();
              fader.classList.add('fade-in');
          });
      }
  });
  
  
  
  
  window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
  });
    