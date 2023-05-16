function calculateTotalValueOfAvailableBooks(books) {
	const total = books
		.reduce((acumulator, book) => acumulator + book.preco, 0)
		.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

	return total;
}
