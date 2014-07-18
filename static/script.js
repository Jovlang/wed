window.onload = function()
{
  $("#open")[0].onchange = function(event)
  {
    var reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = function()
    {
      $("#buffer")[0].value = reader.result;
    };
  };
}
