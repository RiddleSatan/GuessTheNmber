const randomNumber=parseInt(Math.random()*100+1)

const pre=[]

const home=document.querySelector('form')
const guess=document.querySelector('#guessField').value
const submit=document.querySelector('#subt')
const previous=document.querySelector('.guesses')

const remaining=document.querySelector('.lastResult')
const result=document.querySelector('#results')

home.addEventListener('submit',(e)=>{
e.preventDefault()
valid(guess);

})

function valid(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        result.innerHTML = "Invalid Input";
    }else{
        check(guess);
    } 
}

function check(guess){
if(guess<randomNumber){
    result.innerHTML = "Number is too low";
}else if(guess<randomNumber){
    result.innerHTML = "Number is too high";
}else if(guess==randomNumber){
    result.innerHTML = "Congractulation you guesed the right number";

}

}


