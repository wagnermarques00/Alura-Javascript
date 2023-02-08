const arm = document.querySelector("#arm");
const control = document.querySelectorAll(".control-adjustment");
const subtract = document.querySelector("#subtract");
const sum = document.querySelector("#sum");

control.forEach((element) => {
	element.addEventListener("click", (event) => {
		console.log(event.target.textContent);
	});
});

sum.addEventListener("click", () => {
	manipulateValue("sum", arm);
});

subtract.addEventListener("click", () => {
	manipulateValue("subtract", arm);
});

function manipulateValue(operator, part) {
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
