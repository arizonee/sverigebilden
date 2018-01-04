/*
// Lagra rutorna på startsite i minnet
var rutor = $("div.ruta")


// För varje ruta, räkna om dess höjd
rutor.each(function (ruta)
  $(this).css("height", $(this).width())
});
*/

// Lagra videon i minnet
var video = $("video")

// När videon är slut, skicka vidare användaren
video.on('ended', function() {
  window.location.href = window.location.href + "?sida=startsite"
})
