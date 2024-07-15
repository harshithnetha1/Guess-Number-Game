var actualNumber=Math.floor(Math.random()*20)+1;
let score=20;
document.querySelector('.sub').addEventListener('click',function(){
   
   
    let guessNumber=document.querySelector(".guess").value;
    console.log(guessNumber);
    if(!guessNumber){
        document.querySelector('.statement').textContent="Enter A valid Number Other than 0 in between 1 to 20";
        score=score-1;
        document.querySelector('.score').textContent=score;
    }
    else if (actualNumber > guessNumber){
        document.querySelector('.statement').textContent="Your number is Smaller than Actual Number";
        score=score-1;
        document.querySelector('.score').textContent=score;
    }
    else if (actualNumber < guessNumber){
        document.querySelector('.statement').textContent="Your number is greater than Actual Number";
        score=score-1;
        document.querySelector('.score').textContent=score;

    }
    else if (actualNumber == guessNumber){
        document.querySelector('.statement').textContent="Congratulations";
        score=score;
        document.querySelector('.score').textContent=score;
        document.querySelector('.scoreMessage').textContent=`Your Scored `
        document.querySelector('.sub').disabled=true;
        

    }
    
    
    

})