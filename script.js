//Registration data
var arr = [];
var index = 0;
function register() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  let account = parseInt(document.getElementById("account").value);
  let money = parseInt(document.getElementById("money").value);
  if (user !== null && password && null && account !== null && cemail !== null && money !== null) {      

var data = [user, password, account, money];
  arr[index] = data;
  index++;
  localStorage.setItem("myarr", JSON.stringify(arr));
     

}   
else{
	alert("fill all inputs");
    window.location.reload();
}
  
}

//login data
function getData() {
  var myarr = localStorage.getItem("myarr");
  var newArr = JSON.parse(myarr);
  if (
    document.getElementById("user") != null &&
    document.getElementById("pass") != null
  ) {
    var login = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i][0] === login && newArr[i][1] === pass) {
        alert("Password Matched");
		window.location.href ="./dashboard.html";
      } else {
        alert("Password didn't Matched");
		window.location.reload();
      }
    }
  }
}

function withdraw() {
  var myarr = localStorage.getItem("myarr");
  var newArr = JSON.parse(myarr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][3] !== 0) {
      let withdrawAmount = parseInt(
        document.getElementById("Withdraw-money").value
      );
      var value = newArr[i][3] - withdrawAmount;
      alert("your current balance is :" + value);
      newArr[i][3] = value;
      localStorage.setItem("arr", JSON.stringify(newArr));
      var myarr = localStorage.getItem("arr");
      var arr = JSON.parse(myarr);
    }
  }
}
function save() {
  var myarr = localStorage.getItem("myarr");
  var newArr = JSON.parse(myarr);
  for (let i = 0; i < newArr.length; i++) {
    alert("Your Previous Balance :" + newArr[i][3]);
    var amount = parseInt(document.getElementById("value").value);
    var value = amount + newArr[i][3];
    alert("Current New balance is :" + value);
    newArr[i][3] = value;
    localStorage.setItem("arr", JSON.stringify(newArr));
    var myarr = localStorage.getItem("arr");
    var arr = JSON.parse(myarr);
  }
}
function check() {
  var myarr = localStorage.getItem("arr");
  var arr = JSON.parse(myarr);
  for (let i = 0; i < arr.length; i++) {
    alert("Balance is : " + arr[i][3]);
  }
}
// function updateData(){

// }

// document.getElementById("withdraw").addEventListener("click",function(){
//     if user
// })
