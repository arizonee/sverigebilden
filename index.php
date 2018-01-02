<?php
// Hämta den sidan användaren begär (ex. ?sida=omoss)
$sida = $_GET["sida"];

// Inkludera headern
include("includes/header.php");

// Om användaren har begärt en specifik undersida hämta den
if ($sida != "") {
  include("content/" . $sida . ".php");
  // Om användaren inte har begärt en specifik undersida hämta video.php
} else {
  include("content/video.php");
}
// Inkludera footern
include("includes/footer.php");
?>
