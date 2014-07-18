function reverseString(str)
{
  var result = "";
  for (var i = str.length-1; i >= 0; i--)
  {
    result += str[i];
  }
  return result;
}

function reverseEachLine()
{
  return $("#buffer")[0].value.split("\n").map(reverseString).join("\n");
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
  }
  $("#rev_whole")[0].onclick = function(event)
  {
    $("#buffer")[0].value = reverseString($("#buffer")[0].value);
  }
  $("#rev_lines")[0].onclick = function(event)
  {
    $("#buffer")[0].value = reverseEachLine($("#buffer")[0].value);
  }
}
