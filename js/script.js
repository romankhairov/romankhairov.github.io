var test = document.getElementById("test");
//document.getElementById('id1').style.color = 'red'
test.onclick = function() {
  test.innerHTML = "This text was changed by JavaScript";
  test.class = "classTest";
  test.style.color = 'red';
  test.style.fontSize = "35px";
}
