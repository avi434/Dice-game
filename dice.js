'use strict'
let score1=document.getElementById('score--0');
let score2=document.getElementById('score--1');
let dice=document.querySelector('.dice');
let roll=document.querySelector('.btn--roll');
let current0=document.getElementById('current--0');
let current1=document.getElementById('current--1');
let player0=document.querySelector('.player--0');
let player1=document.querySelector('.player--1');
let hold=document.querySelector('.btn--hold');
let regame=document.querySelector('.btn--new');
let scores,currentScore,play,active;
let init=function(){
    currentScore=0;
    scores=[0,0];
    active=0;
    play=true;
	score1.textContent=0;
    score2.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();
function rollDice() {
if(play){
dice.classList.remove('hidden');
let rollresult=Math.trunc(Math.random() * 6)+1;
dice.setAttribute('src',`dice-${rollresult}.png`);
console.log(rollresult);
if(rollresult!=1){
currentScore+=rollresult;
document.getElementById(`current--${active}`).textContent=currentScore;
}
else{
document.getElementById(`current--${active}`).textContent=0;	
active= active===0 ? 1:0;
currentScore=0;
player0.classList.toggle('player--active');
player1.classList.toggle('player--active');
}
}
}
function held(){
	if(play){
	scores[active]+=currentScore;
	document.getElementById(`score--${active}`).textContent=scores[active];
	if(scores[active]>=20){
		dice.classList.add('hidden');
		play=false;
		document.querySelector(`.player--${active}`).classList.add('player--winner');
		document.querySelector(`.player--${active}`).classList.remove('player--active');

	}
	else{
	document.getElementById(`current--${active}`).textContent=0;
    active= active===0 ? 1:0;
    currentScore=0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
}
}
roll.addEventListener("click",rollDice);
hold.addEventListener("click",held)
regame.addEventListener("click",init);

