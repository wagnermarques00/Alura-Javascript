const listOfKeys = document.querySelectorAll(".key");

for (let count = 0; count < listOfKeys.length; count++) {
	const key = listOfKeys[count];
	const instrument = key.classList[1];
	const idAudio = `#sound_${instrument}`;

	key.onclick = function () {
		playSound(idAudio);
	};
}

function playSound(idSoundElement) {
	document.querySelector(idSoundElement).play();
}
