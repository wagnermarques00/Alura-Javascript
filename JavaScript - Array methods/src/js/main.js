let books = [];
const API_ENDPOINT = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBooksFromAPI();

async function getBooksFromAPI() {
	const response = await fetch(API_ENDPOINT);
	books = await response.json();
	let discountedBooks = applyDiscount(books);

	renderBooks(discountedBooks);
}
