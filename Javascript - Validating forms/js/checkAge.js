export default function isAdult(age) {
	const birthDate = new Date(age.value);
	checkAge(birthDate);
}

function checkAge(date) {
	const actualDate = new Date();
	const datePlus18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

	return actualDate >= datePlus18;
}
