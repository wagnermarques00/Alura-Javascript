const listOfKeys = document.querySelectorAll(".key");

for (let count = 0; count < listOfKeys.length; count++) {
	const key = listOfKeys[count];
	const instrument = key.classList[1];
	const idAudio = `#sound_${instrument}`;

	key.onclick = function () {
		playSound(idAudio);
	};

	key.onkeydown = function (event) {
		if (event.code === "Enter" || event.code === "Space") {
			key.classList.add("active");
		}
	};

	key.onkeyup = function () {
		key.classList.remove("active");
	};
}

function playSound(soundSelector) {
	const element = document.querySelector(soundSelector);

	if (element && element.localName === "audio") {
		element.play();
	} else {
		console.log("Element or selector not found");
	}
}
