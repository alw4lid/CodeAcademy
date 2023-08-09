function check() {
  var no1 = document.getElementById("number1").value;
  var no2 = document.getElementById("number2").value;
  var no3 = document.getElementById("number3").value;

  var no1 = Number(no1);
  var no2 = Number(no2);
  var no3 = Number(no3);

  if (no1 > no2 && no2 > no3) {
    alert("Largest " + no1 + " and " + no2 + " and " + no3);
  } else if (no2 > no1 && no1 > no3) {
    alert("Largest " + no2 + " and " + no1 + " and " + no3);
  } else if (no3 > no2 && no2 > no1) {
    alert("Largest " + no3 + " and " + no2 + " and " + no1);
  }
}
