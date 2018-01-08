// Lagra videon i minnet
var video = $("video")

// När videon är slut, skicka vidare användaren
video.on('ended', function() {
  window.location.href = window.location.href + "?sida=startsite"
})

// Tabell kött1
if (document.getElementById("kott-statistik1")) {
  var ctx = document.getElementById("kott-statistik1").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["1970", "1990", "2016"],
          datasets: [{
              label: 'miljoner kg kött/hela landet',
              data: [407.7, 458.7, 815.8],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(240, 170, 20, 1)',
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  },
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  }
              }]
          }
      }
  });
}

// Tabell kött2
if (document.getElementById("kott-statistik2")) {
  var ctx = document.getElementById("kott-statistik2").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["1970", "1990", "2016"],
          datasets: [{
              label: 'kg kött/person',
              data: [50.6, 53.6, 82.2],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(240, 170, 20, 1)',
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  },
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  }
              }]
          }
      }
  });
}

// Tabell narkotika1
if (document.getElementById("narkotika-statistik1")) {
  var ctx = document.getElementById("narkotika-statistik1").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
          datasets: [{
              label: 'Antal döda av narkotika överdos',
              data: [70, 122, 133, 138, 157, 194, 204, 203, 258, 225, 245, 235, 310, 320, 350, 369, 371, 427, 476, 614, 661],
              backgroundColor: [
                  'rgba(0, 153, 0, 0.2)',
              ],
              borderColor: [
                  'rgba(0, 153, 0, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  },
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  }
              }]
          }
      }
  });
}


// Tabell utsläpp1
if (document.getElementById("utslapp-statistik1")) {
  var ctx = document.getElementById("utslapp-statistik1").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["1970", "1990", "2016"],
          datasets: [{
              label: 'miljoner kg kött/hela landet',
              data: [407.7, 458.7, 815.8],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(240, 170, 20, 1)',
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  },
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  }
              }]
          }
      }
  });
}