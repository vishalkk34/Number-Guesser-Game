//values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min,max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//event listener fro play again
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }

});


//listener for guess
guessBtn.addEventListener('click',function(){
    let guess=parseInt(guessInput.value);

    //validation
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a Number between ${min} and ${max}`,'red');
    }
    else{
        if(guess===winningNum)
        {
            gameOver(true,`${winningNum} is correct, Hurrey! You Win!`);
        }else{
            //wrong number
            guessesLeft-=1;

            if(guessesLeft===0)
            {
                gameOver(false,`GAME OVER, YOU LOST! The correct answer is ${winningNum}`);
            }else{
             //game continues with number of guess left over

             //change border color
             guessInput.style.borderColor='red';
             //clear input
             guessInput.value='';
             //leftover message
             setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
            }
        }
    }
});


//gameover function
function gameOver(won, msg){
 let color;
 won===true ? color='green' : color='red';
 guessInput.disabled=true;
 guessInput.style.borderColor=color;
 message.style.color=color;
 setMessage(msg);
 
 //play again
 guessBtn.value='play again';
 guessBtn.className +='play-again';

}

//setMessage function
function setMessage(msg,color){
    message.style.color=color;
    message.textContent=msg;
}

//random number
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}