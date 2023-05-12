const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => button.addEventListener("click", filterBooks));

function filterBooks() {
	const buttonElement = document.getElementById(this.id);
	const category = buttonElement.value;
	let filteredBooks = books.filter((book) => book.categoria == category);

	renderBooks(filteredBooks);
}
