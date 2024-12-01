document.getElementById("log-in").addEventListener('click',function(e){
   const mobileNumber=document.getElementById("mobile-number").value ;
   const pinCode=document.getElementById("pin-code").value ;
//    console.log(mobileNumber,pinCode);

   if(mobileNumber === "123" && pinCode === "12"){
    console.log('loged in');
    window.location.href = "./home.html";
   }else{
    alert("wrong")
   }
    e.preventDefault()
})