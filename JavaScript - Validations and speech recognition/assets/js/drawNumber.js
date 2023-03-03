const highestValue = 100;
const lowestValue = 1;
const secretNumber = generateRandomNumber();

const highestValueElement = document.getElementById("highest-value");
const lowestValueElement = document.getElementById("lowest-value");

highestValueElement.innerHTML = highestValue;
lowestValueElement.innerHTML = lowestValue;

function generateRandomNumber() {
	return parseInt(Math.random() * highestValue + 1);
}

// console.log(`Número secreto: ${secretNumber}`); -> If you want to see the result previously, uncomment this line and the drawn number will appear in the console.log
