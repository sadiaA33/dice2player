var score=[0,0];
var currentScore=0;

var currentPlayer=0;

const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const start = document.getElementById('reset');
const dice = document.getElementById('img');

const nextPlayer = ()=>{
	currentPlayer=== 0 ? currentPlayer = 1 :currentPlayer = 0;
	currentScore = 0;
	document.getElementById('current-score-0').textContent = '0';
	document.getElementById('current-score-1').textContent = '0';
	document.querySelector('.player-1-section').classList.toggle('active');
   document.querySelector('.player-2-section').classList.toggle('active');
   checkWinner();
}

const diceRoll = (x) => {
	dice.style.visibility='visible';
    dice.src = `img/dice${x}.png`;
}

const round = (x) => {
if(x !== 1){
currentScore += x;
document.getElementById(`current-score-${currentPlayer}`).textContent = currentScore;
	} else {
		nextPlayer();
	}

}

const saveScore = ()=> {
  score[currentPlayer] += currentScore;
  document.getElementById('score-' + currentPlayer).textContent = score[currentPlayer];
   checkWinner();
}

const checkWinner =()=> {
	if(score[currentPlayer] >= 20 ){
		document.getElementById('player-' + currentPlayer).textContent ='Winner';
		dice.style.visibility = 'hidden';
		roll.style.display = "none";
		hold.style.display = "none";
		

	}
}

/*const reset = () => {

// 	dice.style.visibility = 'hidden';
//    roll.style.display = 'block';
//    hold.style.display = 'block';

//    document.getElementById('player-0').textContent = 'Player 1';
//    document.getElementById('player-1').textContent = 'Player 2';

//    document.getElementById('score-0').textContent = '0';
//    document.getElementById('score-1').textContent = '0';

//    document.getElementById('current-score-0').textContent = '0';
//    document.getElementById('current-score-1').textContent = '0';

  /* document.querySelector('.player-1-section').classList.remove('active');
   document.querySelector('.player-2-section').classList.remove('active');
document.querySelector('.player-1-section').classList.add('active');*/

	 /*score=[0,0];
 currentScore=0;
 currentPlayer=0;

dice.style.visibility = 'none';
	roll.style.display='block';
	hold.style.display = 'block';


document.getElementById('player-0').textContent = 'Player 1';
document.getElementById('player-1').textContent = 'Player 2';
      document.getElementById('score-0').textContent = '0';
       document.getElementById('score-1').textContent = '0';
       document.getElementById('current-Score-0').textContent = '0';
	   document.getElementById('current-Score-1').textContent = '0';*/
	



roll.addEventListener('click', () => {
	let randomNumber = Math.floor(Math.random() *6) +1;
	diceRoll(randomNumber);
	round(randomNumber)
   
})

hold.addEventListener('click', () => {
	saveScore();
	nextPlayer();
})

start.addEventListener('click',() =>{
	

})

