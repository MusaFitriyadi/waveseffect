$(".waves").mousedown(function(e) {
  var button = e.target;

  var rect = button.getBoundingClientRect();
  
  var wave = button.querySelector(".wave");
  $(wave).remove(); // Remove all span
  
  wave = document.createElement("span");
  wave.className = "wave";

  wave.style.width = Math.max(rect.width, rect.height) + "px";
  wave.style.height = wave.style.width;

  button.appendChild(wave);

  var top =
    e.pageY - rect.top - wave.offsetHeight / 2 - document.body.scrollTop;
  var left =
    e.pageX - rect.left - wave.offsetWidth / 2 - document.body.scrollLeft;
  wave.style.top = top + "px";
  wave.style.left = left + "px";
  return false;
});

