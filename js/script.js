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
              label: 'miljoner kg övriga köttprodukter/hela landet',
              data: [51.2, 81.6, 128.5],
              backgroundColor: [
                  'rgba(148, 0, 211, 0.2)',
                  'rgba(148, 0, 211, 0.2)',
                  'rgba(148, 0, 211, 0.2)'
              ],
              borderColor: [
                  'rgba(148, 0, 211, 1)',
                  'rgba(148, 0, 211, 1)',
                  'rgba(148, 0, 211, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'miljoner kg charkuteri och konserver/hela landet',
              data: [211.5, 185.0, 194.2],
              backgroundColor: [
                  'rgba(0, 255, 0, 0.2)',
                  'rgba(0, 255, 0, 0.2)',
                  'rgba(0, 255, 0, 0.2)'
              ],
              borderColor: [
                  'rgba(0, 255, 0, 1)',
                  'rgba(0, 255, 0, 1)',
                  'rgba(0, 255, 0, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'miljoner kg fjäderfä/hela landet',
              data: [26.3, 46.5, 217.7],
              backgroundColor: [
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(240, 170 ,20 , 0.2)'
              ],
              borderColor: [
                  'rgba(240, 170, 20, 1)',
                  'rgba(240, 170, 20, 1)',
                  'rgba(240, 170, 20, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'miljoner kg fläskkött/hela landet',
              data: [79.5, 88.0, 149.4],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'miljoner kg nötkött inkl kalv/hela landet',
              data: [39.2, 57.6, 126.0],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  stacked: true,
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  },
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                  stacked: true,
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
              label: 'kg övriga köttprodukter/person',
              data: [6.3, 9.6, 12.9],
              backgroundColor: [
                  'rgba(148, 0, 211, 0.2)',
                  'rgba(148, 0, 211, 0.2)',
                  'rgba(148, 0, 211, 0.2)'
              ],
              borderColor: [
                  'rgba(148, 0, 211, 1)',
                  'rgba(148, 0, 211, 1)',
                  'rgba(148, 0, 211, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'kg charkuteri och konserver/person',
              data: [26.3, 21.6, 19.6],
              backgroundColor: [
                  'rgba(0, 255, 0, 0.2)',
                  'rgba(0, 255, 0, 0.2)',
                  'rgba(0, 255, 0, 0.2)'
              ],
              borderColor: [
                  'rgba(0, 255, 0, 1)',
                  'rgba(0, 255, 0, 1)',
                  'rgba(0, 255, 0, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'kg fjäderfä/person',
              data: [3.3, 5.4, 21.9],
              backgroundColor: [
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(240, 170 ,20 , 0.2)'
              ],
              borderColor: [
                  'rgba(240, 170, 20, 1)',
                  'rgba(240, 170, 20, 1)',
                  'rgba(240, 170, 20, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'kg fläskkött/person',
              data: [9.9, 10.3, 15.1],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'kg nötkött inkl kalv/person',
              data: [4.9, 6.7, 12.7],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  stacked: true,
                  gridLines: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  },
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                  stacked: true,
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
