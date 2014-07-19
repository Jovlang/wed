function loadCSS()
{
  $("style").remove();
  $("head").append('<style>' + $("#buffer")[0].value + '</style>');
}

window.onload = function()
{
  $("#open")[0].onchange = function(event)
  {
    var reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = function()
    {
      $("#buffer")[0].value = reader.result;
    }
    loadCSS();
  }
  $("#load")[0].onclick = loadCSS;
  document.body.onkeypress = function(event)
  {
    if (event.keyCode === 17)
      loadCSS();
  }
  $("#buffer")[0].value = $("style")[0].innerHTML;
}
