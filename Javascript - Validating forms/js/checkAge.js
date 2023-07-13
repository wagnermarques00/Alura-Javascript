export default function isAdult(age) {
	const birthDate = new Date(age.value);
	if (!checkAge(birthDate)) {
		age.setCustomValidity("O usuário não é maior de idade");
	}
}

function checkAge(date) {
	const actualDate = new Date();
	const datePlus18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

	return actualDate >= datePlus18;
}
