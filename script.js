//Registration data
var arr = [];
var index = 0;
function register() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  let account = parseInt(document.getElementById("account").value);
  let money = parseInt(document.getElementById("money").value);
  var data = [user, password, account, money];
  arr[index] = data;
  index++;
  localStorage.setItem("myarr", JSON.stringify(arr));
}

//login data
function getData() {
  var myarr = localStorage.getItem("myarr");
  var newArr = JSON.parse(myarr);
  if ((document.getElementById("user")!= null)&&(document.getElementById("pass")!= null)) {
    var login = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
      for(let i=0;i<newArr.length;i++){
        if((newArr[i][0]===login)&&(newArr[i][1]===pass)){
          alert("Matched")
        }
        else{
          alert("Not Matched")
        }
      }
}
}

function withdraw() {
  if (newArr[i][3] !== 0) {
    let withdrawAmount = parseInt(
      document.getElementById("Withdraw-money").value
    );
   newArr[i][3] = newArr[i][3] - withdrawAmount;
    alert(newArr[i][3]);
  }
}
function deposit() {
  let depositAmount = parseInt(document.getElementById("deposit").value);
  newArr[i][3] + depositAmount;
  window.location.href("./dashboard.html");
}
function check() {
  alert(newArr[i][3]);
  window.location.href("./dashboard.html");
}
// function updateData(){

// }

// document.getElementById("withdraw").addEventListener("click",function(){
//     if user
// })
