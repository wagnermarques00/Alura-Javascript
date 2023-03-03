window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const guessElement = document.getElementById("guess");
const recognition = new SpeechRecognition();

recognition.lang = "pt-BR";
recognition.start();
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => recognition.start());

function onSpeak(event) {
	guess = event.results[0][0].transcript;

	showGuessOnScreen(guess);
	validateGuess(guess);
}

function showGuessOnScreen(guess) {
	guessElement.innerHTML = `
        <div>Você disse:</div>
		<span class="box">${guess}</span>
    `;
}
