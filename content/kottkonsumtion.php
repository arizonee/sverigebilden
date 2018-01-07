<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <div class="ruta">
      <h2>Köttkonsumtion</a></h2>
        <!DOCTYPE HTML>
<html>
<head>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script type="text/javascript">

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Köttkonsumtion"              
		},
		data: [              
		{
			type: "column",
			dataPoints: [
				{ label: "1970",  y: 50.6  },
				{ label: "2016", y: 82.2  },
			]
		}
		]
	});
	chart.render();
}
</script>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
</body>
</html>
      </div>
    </div>
  </div>
</div>
