const highestValue = 100;
const lowestValue = 95;
const secretNumber = generateRandomNumber();

const highestValueElement = document.getElementById("highest-value");
const lowestValueElement = document.getElementById("lowest-value");

highestValueElement.innerHTML = highestValue;
lowestValueElement.innerHTML = lowestValue;

function generateRandomNumber() {
	return parseInt(Math.random() * highestValue + 1);
}

console.log(`Número secreto: ${secretNumber}`);
