// Good Luck! You got this 💪🏾
// Write your code here.

function playGeme(player1,player2){
    if (player1==='Rock' && player2==='paper'){
        return 'player2 won'
    }else if(player1==="scissors"&&player2==="Rock"){
        return 'player1 won'
    }else{
        return 'return tie'
    }
}
 console.log(playGeme('Rock','paper'))
console.log(playGeme('scissors','scissors'))