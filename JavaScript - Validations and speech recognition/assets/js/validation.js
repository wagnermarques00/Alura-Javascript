function verifyIfGuessIsAValidNumber(guess) {
	const number = +guess;

	if (invalidGuess(number)) {
		guessElement.innerHTML += "<div>Valor inválido</div>";
		return;
	}

	if (numberIsHigherOrLowerThanGuessThanAllowed(guess)) {
		guessElement.innerHTML += `
            <div>Valor inválido. Fale um número entre ${lowestValue} e ${highestValue}</div>
        `;
		return;
	}

	if (number === secretNumber) {
		guessElement.innerHTML += `
            <h2>Você acertou!!</h2>
            <h3>O número secreto era ${secretNumber}</h3>

            <button class="btn-play" id="play-again">Jogar novamente</button>
        `;
	} else if (number > secretNumber) {
		guessElement.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
	} else {
		guessElement.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
	}
}

function numberIsHigherOrLowerThanGuessThanAllowed(guess) {
	return guess > highestValue || guess < lowestValue;
}

function invalidGuess(number) {
	return Number.isNaN(number);
}

document.body.addEventListener("click", (event) => {
	if (event.target.id == "play-again") {
		window.location.reload();
	}
});
