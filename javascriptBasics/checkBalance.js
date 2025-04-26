let Balance = 400000
let withdraw = 300000

if (Balance >= withdraw){
    Balance =   Balance - withdraw
    console.log("withdraw succesfully Remaining balance :" + Balance)
}
else{
    console.log("Insufficent Balance")
}