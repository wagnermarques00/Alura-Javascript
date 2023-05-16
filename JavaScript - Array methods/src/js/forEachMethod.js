const insertBooksElement = document.getElementById("books");
const totalBooksValueElement = document.getElementById("availableBooksTotalValue");

function renderBooks(bookList) {
	totalBooksValueElement.innerHTML = "";
	insertBooksElement.innerHTML = "";

	bookList.forEach((book) => {
		const formattedPrice = book.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
		const availability = checkBookAvailability(book);

		insertBooksElement.innerHTML += `
			<div class="book">
				<img class="${availability}" src="${book.imagem}" alt="${book.alt}"/>
				<h2 class="book__title">${book.titulo}</h2>
				<p class="book__description">${book.autor}</p>
				<p class="book__price" id="price">${formattedPrice}</p>
				<div class="tags">
					<span class="tag">${book.categoria}</span>
				</div>
			</div>
		`;
	});
}

function checkBookAvailability(book) {
	const available = book.quantidade > 0 ? "book__images" : "book__images unavailable";

	return available;
}
