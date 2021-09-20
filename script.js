//Registration data
var data = [];
   function register(){
            
            let user = document.getElementById("user").value;
            let password = document.getElementById("password").value;
            let account = parseInt(document.getElementById("account").value);
            let money = parseInt(document.getElementById("money").value);
           var value = [user,password,account,money]
           data.push(value);
           console.log(data)
                alert("successfully Registered")
        
        }
    
    //login data
      var login = document.getElementById("login").value;
      var pass = document.getElementById("pass").value;
    
    //dasboard
    for(var i = 0; i < data.length; i++) {
            if((data[i][0]===user)&&(data[i][0]===pass)){
              window.location.href("./dashboard.html");
              function withdraw(){
                  if(data[i][3]!==0){
                      let withdrawAmount =parseInt(document.getElementById("Withdraw-money").value);
                      data[i][3]-withdrawAmount;
                      document.write(data[i][3]);
                      window.location.href("./dashboard.html");
                  }
              }
              function deposit(){
                
                    let depositAmount =parseInt(document.getElementById("deposit").value);
                    data[i][3]+depositAmount;
                    window.location.href("./dashboard.html");
                }
                function check(){
                
                    alert(data[i][3])
                    window.location.href("./dashboard.html");
                }
                // function updateData(){

                // }
            }
            
        
    else{
        window.location.href("./login.html");
        alert("try again")
    }
}
    
    
    
    // document.getElementById("withdraw").addEventListener("click",function(){
    //     if user
    // })

