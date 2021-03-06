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
              label: 'milj kg fjäderfä/hela landet',
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
          labels: ["1900","1901","1902","1903","1904","1905","1906","1907","1908","1909","1910","1911","1912","1913","1914","1915","1916","1917","1918","1919","1920","1921","1922","1923","1924","1925","1926","1927","1928","1929","1930","1931","1932","1933","1934","1935","1936","1937","1938","1939","1940","1941","1942","1943","1944","1945","1946","1947","1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"],
          datasets: [{
              label: 'Svenskt utsläppsindex',
              data: [100.00,92.92848582,97.32321215,106.911706,112.5848981,110.8270076,123.1322413,139.2728726,148.7814622,136.9556532,141.6300439,137.9544547,152.8565721,171.8337994,161.8857371,163.0043947,171.8337994,73.7514982,87.25529365,83.73951258,113.4238913,65.56132641,108.4298841,131.921694,157.4510587,140.6312425,136.6759888,192.2093488,177.1474231,211.2265282,206.4322813,206.5521374,204.3148222,212.8246105,236.9956053,249.3407911,273.1522173,315.6212545,285.0179784,319.5365561,201.4782261,164.0431482,142.0295645,172.7127447,135.7171394,49.66040751,189.5325609,273.6715941,335.9168997,292.6488214,312.5449461,364.6823811,376.5081902,355.0139832,376.2285258,426.40831,473.0723132,423.6516181,458.8493807,462.3252097,536.2764682,532.2413104,559.2089493,603.2760687,658.4099081,682.3411906,790.8909309,751.7778666,846.3843388,942.0695166,1006.472233,921.6140631,923.6915701,951.8577707,870.3955254,880.5833,962.1254495,934.8381942,866.5201758,925.2896524,781.8218138,756.4522573,678.6656013,635.1578106,624.6504195,679.7842589,675.9089093,650.6192569,625.8489812,605.0339592,565.960847,561.3663604,555.9328805,563.88334,598.0823012,600.9188973,609.1490212,568.1582101,577.1873751,556.8118258,537.6747903,557.0115861,625.6492209,596.8437875,594.0071914,561.7658809,540.0719137,523.611666,535.1977627,469.1969636,566.7998402,563.6436276,512.5848981,488.6136636,473.0723132],
              backgroundColor: [
                  'rgba(183, 81, 84, 0.2)',
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(183, 81, 84, 1)',
                  'rgba(240, 170, 20, 1)',
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          },
                    {
              label: 'Globalt utsläppsindex',
              data: [100.00,103.3707865,105.9925094,115.5430712,116.8539326,124.1573034,132.3970037,146.8164794,140.4494382,147.0037453,153.3707865,156.5543071,164.6067416,176.5917603,159.17603,156.928839,168.7265918,178.8389513,175.2808989,150.9363296,174.5318352,150.3745318,158.2397004,181.6479401,180.3370787,182.5842697,184.082397,198.8764045,199.4382022,214.4194757,197.1910112,176.0299625,158.6142322,167.2284644,182.2097378,192.3220974,211.6104869,226.4044944,213.8576779,223.2209738,243.258427,249.8127341,251.3108614,260.4868914,258.988764,217.2284644,231.835206,260.6741573,275.093633,265.7303371,305.2434457,330.8988764,336.1423221,344.7565543,349.2509363,382.3970037,407.6779026,425.093633,436.329588,459.5505618,481.0861423,483.1460674,502.9962547,530.5243446,560.8614232,586.1423221,615.7303371,635.3932584,667.7902622,707.8651685,758.988764,788.0149813,819.4756554,864.0449438,865.7303371,860.6741573,910.8614232,939.3258427,950.1872659,1003.183521,992.6966292,962.1722846,953.9325843,950.3745318,984.6441948,1014.419476,1045.505618,1072.097378,1111.610487,1135.955056,1137.453184,1150.187266,1138.202247,1136.70412,1156.179775,1180.71161,1207.490637,1227.715356,1231.460674,1228.651685,1260.861423,1290.82397,1309.737828,1381.273408,1450.00,1505.992509,1561.048689,1592.322097,1643.445693,1628.651685,1709.363296,1779.588015,1811.423221,1830.149813,1845.505618],
              backgroundColor: [
                  'rgba(70, 150, 66, 0.2)',
                  'rgba(240, 170 ,20 , 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(70, 150, 66, 1)',
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
