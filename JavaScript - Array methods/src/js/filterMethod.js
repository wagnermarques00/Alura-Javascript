const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => button.addEventListener("click", filterBooks));

function filterBooks() {
	const buttonElement = document.getElementById(this.id);
	const category = buttonElement.value;

	let filteredBooks = category === "disponivel" ? filterByAvailability() : filterByCategory(category);

	renderBooks(filteredBooks);

	if (category === "disponivel") {
		const totalValue = calculateTotalValueOfAvailableBooks(filteredBooks);

		renderTotalValueOfAvailableBooks(totalValue);
	}
}

function filterByCategory(category) {
	return books.filter((book) => book.categoria == category);
}

function filterByAvailability() {
	return books.filter((book) => book.quantidade > 0);
}

function renderTotalValueOfAvailableBooks(totalValue) {
	if (totalBooksValueElement) {
		totalBooksValueElement.innerHTML = `
            <div class="available__books">
                <p>Todos os livros disponíveis por <span id="value">${totalValue}</span></p>
            </div>
        `;
	}
}
