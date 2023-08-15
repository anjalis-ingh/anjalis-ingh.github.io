// Js for side scroll on Homepage

var endStart = document.getElementById('endStart') // last panel of first round
var endLast = document.getElementById('endLast')

var begStar = endStart.getBoundingClientRect().right; // position at the end of first round
var lastEnd = endLast.getBoundingClientRect().right; // position at the end of 2nd round

window.onscroll = function () {
  if (window.matchMedia ("(min-width: 480px)").matches) {
      // Horizontal Scroll
      var y = document.body.getBoundingClientRect().top;
      page.scrollLeft = -y;

      var barP = scrollY / begStar;
      var barPosition = barP * window.innerWidth;

      var barP2 = (scrollY - begStar) / begStar;
      var bar2Position = barP2 * window.innerWidth;

      document.getElementById("moveBar").style.marginLeft = barPosition + "px";
      document.getElementById("moveBar2").style.marginLeft = bar2Position + "px";

        // Looping Scroll
        // Find new locations based on window width
        var begEnd = lastEnd - window.innerWidth;
        var returnMid = begStar - window.innerWidth;

        // if at 0 position and scroll up
        if (window.scrollY == 0) {
          window.scrollTo(0,begStar);
        }
        // if at beginning of the last pane
        else if (window.scrollY == begEnd) {
          window.scrollTo(0, returnMid);
        }
    }

}
          
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();


// Reset window-based vars
function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
  var inwidth = window.innerWidth * window.innerWidth
  var barwidth = inwidth / begStar;
  document.getElementById("moveBar").style.width = barwidth + "px";
  document.getElementById("moveBar2").style.width = barwidth + "px";
}

function mobileNav() {
  var x = document.getElementById("responsivenav");
  if (x.className === "topnav-right") {
    x.className += " responsive";
  } 
  else {
    x.className = "topnav-right";
  }
}

function xAnime(x) {
  x.classList.toggle("change");
}

dragElement(document.getElementById("moveBar"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } 
  else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


$(function(){
    $('.img_wrap').on( 'mouseover', function() {
      $( this ).find( '.imgContainer').toggleClass('animated', 'static');
    })
})

$(function(){
    $('.img_wrap').on( 'mouseout', function() {
      $( this ).find( '.imgContainer').toggleClass('animated', 'static');
    })
})


function copyDivToClipboard() {
 var range = document.createRange();
                   range.selectNode(document.getElementById("emailCopy"));
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
  var tooltip = document.getElementById("myTooltip");
  var tooltip2 = document.getElementById("myTooltip2");

  tooltip.innerHTML = "🥳 Copied! TTYS! ";
  tooltip2.innerHTML = "🥳 Copied! TTYS! ";
}


function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  var tooltip2 = document.getElementById("myTooltip2");
  tooltip.innerHTML = "📋 Click to copy";
  tooltip2.innerHTML = "📋 Click to copy";
}

function fadeInPage() {
  if (!window.AnimationEvent) { return; }
      var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}


document.addEventListener('DOMContentLoaded', function() {
   if (!window.AnimationEvent) { return; }
   var anchors = document.getElementsByTagName('a');
    
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