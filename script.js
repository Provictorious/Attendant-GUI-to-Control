function zoomIn() {
    var img = document.getElementById("myImg");
    var currWidth = img.clientWidth;
    img.style.width = (currWidth + 100) + "px"; // Increase image width by 100 pixels
  }
  
  function zoomOut() {
    var img = document.getElementById("myImg");
    var currWidth = img.clientWidth;
    img.style.width = (currWidth - 100) + "px"; // Decrease image width by 100 pixels
  }
  