

//Registration data
var arr = [];
var index = 0
function register() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  let account =parseInt(document.getElementById("account").value);
  let money = parseInt(document.getElementById("money").value);
   var data = [user, password, account, money];
  arr[index] = data;
  index++;
  console.log(arr)
}
    
    //login data
   function  login() {
      var login = document.getElementById("login").value;
      var pass = document.getElementById("pass").value;
    
    for(var i = 0; i < arr.length; i++) {
            if((arr[i][0]===login)&&(arr[i][0]===pass)){
              window.location.href("./dashboard.html");
            }
            else{
              console.log("Error");
            }

            }


              function withdraw(){
                  if(arr[i][3]!==0){
                      let withdrawAmount =parseInt(document.getElementById("Withdraw-money").value);
                      arr[i][3]-withdrawAmount;
                      document.write(arr[i][3]);
                      window.location.href("./dashboard.html");
                  }
              }
              function deposit(){
                
                    let depositAmount =parseInt(document.getElementById("deposit").value);
                    arr[i][3]+depositAmount;
                    window.location.href("./dashboard.html");
                }
                function check(){
                
                    alert(arr[i][3])
                    window.location.href("./dashboard.html");
                }
                // function updateData(){

                // }
            }
            
        
   

    
    
    
    // document.getElementById("withdraw").addEventListener("click",function(){
    //     if user
    // })

