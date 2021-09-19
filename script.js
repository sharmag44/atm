//Registration data
if (document.forms["reg"].value ===""){
    alert("must filled the forms");
}
else{
    var data = [];
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let account = document.getElementById("account").value;
    let money = parseInt(document.getElementById("money").value);
    document.getElementById("btn").addEventListener('click',function(){
        data.push([user,password,account,money]);
        document.write(data)
        console.log(data);
    });
    //login data
      let login = document.getElementById("login").value;
      let pass = document.getElementById("pass").value;
    
    //dasboard
    for(var i = 0; i < data.length; i++) {
        for(var j = 0; j < data[i].length; j++) {
            if((data[i][0]===login)&&(data[i][1]===pass)){
              window.location.href("./dashboard.html");
              function withdraw(){
                  if(data[i][3]!==0){
                      let withdrawAmount =parseInt(document.getElementById("Withdraw-money").value);
                      data[i][3]-withdrawAmount;
                  }
              }
              function deposit(){
                
                    let depositAmount =parseInt(document.getElementById("deposit").value);
                    data[i][3]+depositAmount;
                }
                function check(){
                
                    document.write(data[i][3]);
                }
                // function updateData(){

                // }
            }
            
        
    else{
        window.location.href("./login.html");
    }
}
    }
    
    
    // document.getElementById("withdraw").addEventListener("click",function(){
    //     if user
    // })
}
