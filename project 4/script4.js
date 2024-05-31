const random=Math.floor((Math.random()*100)+1)
const submit=document.querySelector('#submit')
const userInput=document.querySelector('#userInput').value
const guesses=document.querySelector('.prevGuess')
const remainingGuesses=document.querySelector('.remainGuess')
const hint=document.querySelector('#hint')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true
if (playGame){
    submit.addEventListener(('click'),(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)||guess<1||guess>100){
        alrert('Please Enter Valid Number !')
    }else{
        prevGuess.push(guess)
        if(numGuess>11){
            displayGuess(guess)
            displayMessage(`Game Over , Random Number was ${guess}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}
function checkGuess(guess){

}
function displayGuess(guess){

}
function displayMessage(message){

}
function newGame(){

}
function endGame(){
    
}