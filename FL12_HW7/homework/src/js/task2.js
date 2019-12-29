let startGame = confirm('Do you want to play a game?');
const maxRangeNum1 = 8;
const maxRangeNum2 = 12;
const minRangeNum = 0;
let maxRangeNum;
let randomNumber;
let randomNumberUser;
let attempts = 3;
let userAttempts;
let prize;
let userPrize;
let firstPrize=100;
let secondPrize=200; 
let nextLevel;
let dividePrize = 2;
 
if (!startGame) {
	alert('You did not become a billionaire, but can.');
} else {
	maxRangeNum = maxRangeNum1
	randomNumber = Math.floor(Math.random() * (+maxRangeNum - +minRangeNum)) + +minRangeNum;
	console.log(randomNumber);
	userAttempts=attempts;
	prize = firstPrize;
	userPrize=0;

	while (userAttempts>0){
	randomNumberUser = prompt(`Choose a roulette pocket number from 0 to ${maxRangeNum1}
        Attempts left: ${userAttempts}
        Total prize: ${userPrize}$
        Possible prize on current attempt: ${prize}$
        Enter your number`)
        if (+randomNumberUser!==randomNumber|| !randomNumberUser) {
        prize/=dividePrize;
        userAttempts--
        } else {
        userPrize= userPrize+prize;
        nextLevel = confirm(`Congratulation, you won! Your prize is: ${userPrize}$. Do you want to continue?`);
        if(nextLevel){
        userAttempts = attempts;
        maxRangeNum = maxRangeNum2;
        prize = secondPrize;
        randomNumber = Math.floor(Math.random() * (+maxRangeNum - +minRangeNum)) + +minRangeNum;
        } else{
                nextLevel = confirm(`Thank you for your participation. Your prize is: ${userPrize}$.
                Do you want to play again?`);
                        if (nextLevel){
                                maxRangeNum = maxRangeNum1
                                randomNumber = Math.floor(Math.random() * (+maxRangeNum - +minRangeNum)) + +minRangeNum;
                                userAttempts=attempts;
                                prize = firstPrize;
                                userPrize=0;
                        } else {
                                break
                        }
                }
        }

                if (userAttempts === 0) {
                        nextLevel = confirm(`Thank you for your participation. Your prize is: ${userPrize}$.
                        Do you want to play again?`);
                        if (nextLevel) {
                                userAttempts = attempts;
                                maxRangeNum = maxRangeNum1
                                prize = firstPrize;
                                userPrize = 0;
                                randomNumber = Math.floor(Math.random() * (+maxRangeNum - +minRangeNum)) + +minRangeNum;
                        } else {
                                break;
                        }
                }

	}

} 
 
  
    