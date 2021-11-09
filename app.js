var number = document.getElementById("number");
var submit = document.getElementById("submit");

var binResult = document.getElementById("bin_Result");
var octalResult = document.getElementById("octal_Result");

var hexaResult = document.getElementById("hexa_Result");

function binary(e) {
  e.preventDefault(); // remove js default behaviour

  var num = document.getElementById("number").value;

  if (num === "") {
    alert("plz enter the input number");
  } 
  else if(num < 0) {
    alert("plz enter the positive number");
  } 
//   else {
//     binResult.style.visibility = "visible";
//     octalResult.style.visibility = "visible";
//     hexaResult.style.visibility = "visible";
//   }
  // converting 
  var binaryNum = Number(num).toString(2);
  var OctalNum = Number(num).toString(8);
  var HexadecimalNum = Number(num).toString(16);

  binResult.innerText = 'Binary Number = '+ binaryNum;

octalResult.innerText = 'Octal Number = '+ OctalNum;

hexaResult.innerText = 'Hexadecimal Number = '+ HexadecimalNum;




}

submit.addEventListener("click", binary);
