import isCPF from "./checkCPF";
import isAdult from "./checkAge";

const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
	field.addEventListener("blur", () => checkField(field));
});

function checkField(field) {
	if (field.name == "cpf" && field.value.length >= 11) {
		isCPF(field);
	}
	if (field.name == "aniversario" && field.value != "") {
		isAdult(field);
	}
}
