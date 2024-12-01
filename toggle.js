document.getElementById("cash-out-show-btn").addEventListener("click",function(){
document.getElementById("cash-outer-form").classList.remove("hidden")
document.getElementById("add-money-form").classList.add("hidden")
    console.log("cash-out-show-btn");
})

document.getElementById("add-money-show-btn").addEventListener("click",function(){
    document.getElementById("add-money-form").classList.remove("hidden")
    document.getElementById("cash-outer-form").classList.add("hidden")
})