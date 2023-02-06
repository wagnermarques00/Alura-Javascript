function playSoundPom() {
	document.querySelector("#sound_key_pom").play();
}

const listOfKeys = document.querySelectorAll(".key");

listOfKeys[0].onclick = playSoundPom;
