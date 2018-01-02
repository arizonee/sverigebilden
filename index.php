<?php
// Inkludera headern
include("includes/header.php");

// Om användaren har begärt en specifik undersida hämta den
if (isset($_GET["sida"])) {
  include("content/" . $_GET["sida"] . ".php");
// Om användaren inte har begärt en specifik undersida hämta video.php
} else {
  include("content/video.php");
}

// Inkludera footern
include("includes/footer.php");
?>
