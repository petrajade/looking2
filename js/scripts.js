// Global Variables

var purple    = "#a366ff";
var pink      = "#ff66b3";
var red       = "#ff5858";
var blue      = "#6686ff";
var lightBlue = "#60caf1";
var green     = "#70e66d";
var orange    = "#ff8558";
var yellow    = "#ffb94d";


// Dynamic Blur Dots

var numberOfPins = 12

  for (i = 0; i < numberOfPins; i++) {

    (function makeDiv() {
      var lightBlurs = ["pinkBlur", "purpleBlur", "blueBlur", "lightBlueBlur", "greenBlur", "yellowBlur", "orangeBlur", "redBlur"];

      var posX = Math.floor(Math.random() * $(document).width() - 220)
      var posY = Math.floor(Math.random() * $(document).height() - 220)

      var randomColorNum = Math.floor(Math.random() * 8);
      var randomDelayNum = Math.floor((Math.random() * 15000) + 5000);

      $newdiv = $('<div/>')
      $newdiv.css({
        'height': 260 + 'px',
        'width': 240 + 'px',
        'mix-blend-mode': 'lighten',
        'background-image': 'url(' + 'images/blurPins/' + lightBlurs[randomColorNum] + '.png' + ')',
        'border-radius': 50 + '%',
        'opacity': 1,
        'position': 'absolute',
        'left': posX + 'px',
        'top': posY + 'px',
        'display': 'none',
        'z-index': -2
      }).appendTo('#pinContainer').fadeIn(1000).delay(randomDelayNum).fadeOut(1000, function() {
        $(this).remove();
        makeDiv();
      });
    })();
  }





// Title Word Animation
//-------------------------------------

// var a = 0;
// var existingNumberArray = [];
//
// (function wordAnimation() {
//   console.log("pewp");
//
//   var randomWordColor = Math.floor(Math.random() * 8);
//   // var wordColors = [
//   //   {text: "new", color: "#a366ff"}, {text: "whimsical", color: "#ff66b3"}, {text: "fancy", color: "#ff5858"},
//   //   {text: "artsy", color: "#a366ff"}, {text: "mysterious", color: "#ff5858"}, {text: "challenging", color: "#ff8558"},
//   //   {text: "different", color: "#a366ff"}];
//
//   var wordColors = [{text: "new", color: "#a366ff"}, {text: "new", color: "#a366ff"}, {text: "new", color: "#a366ff"}, {text: "new", color: "#a366ff"}, {text: "new", color: "#a366ff"}];
//
//   //-----------------------------------------------
//   if (a < wordColors.length) {
//
//     var colorPair = wordColors[randomWordColor]
//     var textColor = colorPair["color"];
//     var adjWord = colorPair["text"];
//
//     //existingNumberArray.push(randomWordColor);
//
//
//
//
//
//
//     var $newSpan = $("<span class='rotate' id='titleAnimationColor'>" + adjWord + "</span>");
//
//     $('.titleAnimation').prepend($newSpan);
//
//     $('.titleAnimation').css({
//       'color': textColor
//     });
//
//     $('#titleAnimationColor').animate({
//       opacity: 1.0
//     }, 500).delay(1500);
//
//     $('#titleAnimationColor').animate({
//         opacity: 0.0
//       }, 500, function(){
//         $('.wordStyle').children('span').remove();
//         a++;
//         wordAnimation();
//       });
//   }
// })();

var a = 0;

(function wordAnimation(){

if (a == 53) {
  a = 0;
}

var words =     ["new", "whimsical", "fancy", "artsy", "mysterious", "challenging", "different",
                 "conventional", "snuggly", "active", "nerdy", "fishy", "sexy", "fun",
                 "outdoorsy", "foreign", "awesome", "offbeat", "boozy", "beautiful",
                 "athletic", "rowdy",  "tonight", "trendy", "nautical", "cultured",
                 "fabulous", "bookish", "aquatic", "delicious", "natural", "social", "mellow",
                 "daring", "seaside", "hyphy", "zany", "unique", "taboo", "coastal",
                 "remote", "delightful", "heroic", "insane", "surprising", "arousing",
                 "tasty", "refreshing", "musical", "extreme", "boundless", "appetizing", "wet"];



var colors =     [purple, pink, red, purple, red, orange, purple,
                  lightBlue, red, orange, purple, blue, red, pink,
                  green, purple, pink, green, lightBlue, green,
                  orange, pink, red, orange, blue, purple,
                  red, purple, blue, yellow, green, lightBlue, purple,
                  orange, blue, lightBlue, pink, purple, red, blue,
                  green, red, orange, pink, purple, red,
                  yellow, lightBlue, purple, orange, green, yellow, blue];

// var randomNum = Math.floor(Math.random() * 33);

var textColor = colors[a];

var adjWord = words[a];

var $newSpan = $("<span class='rotate' id='titleAnimationColor'>" + adjWord + "</span>");

  $('.titleAnimation').prepend($newSpan);

  $('.titleAnimation').css({
    'color': textColor
  });

  $('#titleAnimationColor').animate({
    opacity: 1.0
  }, 500).delay(1500);

  $('#titleAnimationColor').animate({
      opacity: 0.0
    }, 500, function(){
      $('.wordStyle').children('span').remove();
      a++;
      wordAnimation();
    });
})();

// Footer Animation

var footerLink1 = document.getElementById("footerLink1");
var footerLink2 = document.getElementById("footerLink2");
var footerLink3 = document.getElementById("footerLink3");
var footerLink4 = document.getElementById("footerLink4");
var footerLink5 = document.getElementById("footerLink5");

footerLink1.addEventListener("mouseover", animateFooterLinkOver, false);
footerLink1.addEventListener("mouseout", animateFooterLinkOut, false);

footerLink2.addEventListener("mouseover", animateFooterLinkOver, false);
footerLink2.addEventListener("mouseout", animateFooterLinkOut, false);

footerLink3.addEventListener("mouseover", animateFooterLinkOver, false);
footerLink3.addEventListener("mouseout", animateFooterLinkOut, false);

footerLink4.addEventListener("mouseover", animateFooterLinkOver, false);
footerLink4.addEventListener("mouseout", animateFooterLinkOut, false);

footerLink5.addEventListener("mouseover", animateFooterLinkOver, false);
footerLink5.addEventListener("mouseout", animateFooterLinkOut, false);

function animateFooterLinkOver(e) {
  TweenLite.to(e.target, .6, {
    ease:Expo.easeOut,
    paddingLeft: "1.4rem",
    paddingRight: "1.4rem",
    color:"#ffffff",
    fontSize: "0.8rem",
    lineHeight: "0.8rem"
  });
}

function animateFooterLinkOut(e) {
  TweenLite.to(e.target, .6, {
    ease:Expo.easeOut,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    color:"#606060",
    fontSize: "0.6rem",
    lineHeight: "0.6rem"
  });
}


// Mobile Side Nav

$("#menuIcon").click(function(){
  var purpWindow = $("#slideNavMenu");
  TweenLite.to(purpWindow, .6, { ease:Back.easeOut.config(2),
    left: "20%"
  });
  var blackWindow = $("#slideNavMenuBack");
      blackWindow.css({'left': 0 + '%'});
  TweenLite.to(blackWindow, .3, { ease:Expo.easeOut,
    opacity: "0.85"
  });
});


$("#slideNavMenuBack").click(function(){
  var purpWindow = $("#slideNavMenu");
  TweenLite.to(purpWindow, .4, { ease:Expo.easeOut,
    left: "100%"
  });
  var blackWindow = $("#slideNavMenuBack");
      blackWindow.css({'left': 100 + '%'});
  TweenLite.to(blackWindow, .3, { ease:Expo.easeOut,
    opacity: "0"
  });
});

$(".navLinks").hover(function(){
    $(this).css({"background-color":"#262626", "border-left":"3px solid #787878"});
    }, function(){
    $(this).css({"background-color":"#333333", "border-left":"none"});
});


// refresh on resize

$(window).resize(function(){location.reload();});
