function validateGuess(guess) {
	const number = +guess;

	if (isInvalidGuess(number)) {
		showErrorMessage("Valor inválido");
	} else if (guessIsOutOfRange(guess)) {
		showErrorMessage(`Valor inválido. Fale um número entre ${lowestValue} e ${highestValue}`);
	} else {
		handleGuessResult(number);
	}
}

function isInvalidGuess(number) {
	return Number.isNaN(number);
}

function guessIsOutOfRange(guess) {
	return guess > highestValue || guess < lowestValue;
}

function handleGuessResult(number) {
	if (number === secretNumber) {
		showSuccessMessage();
		showPlayAgainButton();
	} else if (number > secretNumber) {
		showErrorMessage("O número secreto é menor", "fa-solid fa-down-long");
	} else {
		showErrorMessage("O número secreto é maior", "fa-solid fa-up-long");
	}
}

function showErrorMessage(message, iconClassName = "") {
	guessElement.innerHTML += `<div>${message} ${iconClassName ? `<i class="${iconClassName}"></i>` : ""}</div>`;
}

function showSuccessMessage() {
	guessElement.innerHTML += `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era ${secretNumber}</h3>
    `;
}

function showPlayAgainButton() {
	guessElement.innerHTML += `<button class="btn-play" id="play-again">Jogar novamente</button>`;
}

function handlePlayAgainClick() {
	window.location.reload();
}

document.body.addEventListener("click", (event) => {
	if (event.target.id === "play-again") {
		handlePlayAgainClick();
	}
});
