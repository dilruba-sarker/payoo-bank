document.getElementById("btn-add-money").addEventListener("click",
    function(e){
      
        e.preventDefault()
        const addMoney=document.getElementById("add-money").value
;        
        const pinNumber=document.getElementById("pin-number").value

;        console.log(addMoney,pinNumber);
if(pinNumber === '1234'){
    // console.log("successfully added money to account");

    const accountBalance=document.getElementById("account-balance").innerText;
    // console.log(accountBalance);
const newAccountBalance=parseFloat(addMoney)+parseFloat(accountBalance)
// console.log(newAccountBalance);
document.getElementById("account-balance").innerText=newAccountBalance
}else{
    alert('fail to add money')
}
    }
)