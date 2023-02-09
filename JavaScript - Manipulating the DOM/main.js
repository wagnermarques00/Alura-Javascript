const control = document.querySelectorAll(".control-adjustment");

control.forEach((element) => {
	element.addEventListener("click", (event) => {
		manipulateValue(event.target.dataset.control, event.target.parentNode);
	});
});

function manipulateValue(operator, control) {
	const part = control.querySelector("[data-counter]");

	if (operator === "+") {
		sumValueToPart(part);
	} else {
		subtractValueToPart(part);
	}
}

function sumValueToPart(part) {
	part.value = parseInt(part.value) + 1;
}

function subtractValueToPart(part) {
	if (parseInt(part.value) > 0) {
		part.value = parseInt(part.value) - 1;
	}
}
