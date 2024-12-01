document.getElementById("btn-cashout-money").addEventListener("click",
    function(e){
        const cashoutMoney=document.getElementById("cashout-money").value;
        const cashoutNumber=document.getElementById("cashout-pin-number").value;
     e.preventDefault()
if(cashoutNumber==='1234'){
    const accountBalance=document.getElementById("account-balance").innerText;
    const newAccountBalance=parseFloat(accountBalance)-parseFloat(cashoutMoney)
    // console.log(newAccountBalance);
document.getElementById("account-balance").innerText=newAccountBalance
}else{
    alert(" wrong number")
}

    }
)