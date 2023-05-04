let books = [];
const API_ENDPOINT = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBooksFromAPI();

const insertBooksElement = document.getElementById("books");

async function getBooksFromAPI() {
	const response = await fetch(API_ENDPOINT);
	books = await response.json();
	console.table(books);

	renderBooks(books);
}

function renderBooks(bookList) {
	bookList.forEach((book) => {
		const formattedPrice = book.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

		insertBooksElement.innerHTML += `
			<div class="book">
				<img class="book__images" src="${book.imagem}" alt="${book.alt}"/>
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
