let sortByPriceButton = document.getElementById("btnSortByPrice");
sortByPriceButton.addEventListener("click", sortBooksByPrice);

function sortBooksByPrice() {
	let sortedBooks = books.sort((a, b) => a.preco - b.preco);

	renderBooks(sortedBooks);
}
