const control = document.querySelectorAll("[data-control]");
const statistics = document.querySelectorAll("[data-statistic]");

const parts = {
	arms: {
		energy: -21,
		power: 35,
		speed: -5,
		strength: 29,
	},

	armor: {
		energy: 0,
		power: 20,
		speed: -20,
		strength: 41,
	},
	cores: {
		energy: 48,
		power: 7,
		speed: -24,
		strength: 0,
	},
	legs: {
		energy: -32,
		power: 21,
		speed: 42,
		strength: 27,
	},
	rockets: {
		energy: 0,
		power: 28,
		speed: -2,
		strength: 0,
	},
};

control.forEach((element) => {
	element.addEventListener("click", (event) => {
		const operator = event.target.dataset.control;
		const parentNode = event.target.parentNode;
		const part = event.target.dataset.part;

		manipulateValues(operator, parentNode);
		updateStatistics(part);
	});
});

function manipulateValues(operator, controller) {
	const part = controller.querySelector("[data-counter]");

	if (operator == "+") {
		sumValue(part);
	} else {
		subtractValue(part);
	}
}

function updateStatistics(part) {
	statistics.forEach((element) => {
		element.textContent = parseInt(element.textContent) + parts[part][element.dataset.statistic];
	});
}

function subtractValue(part) {
	if (part.value > 0) {
		part.value = addZeroIfLessThanTen(parseInt(part.value) - 1);
	}
}

function sumValue(part) {
	part.value = addZeroIfLessThanTen(parseInt(part.value) + 1);
}

function addZeroIfLessThanTen(value) {
	return (parseInt(value) < 10 ? "0" : "") + value;
}
