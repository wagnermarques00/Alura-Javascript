let books = [];
const API_ENDPOINT = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

fetchBooksFromAPI();

async function fetchBooksFromAPI() {
	try {
		const response = await fetch(API_ENDPOINT);
		books = await response.json();
		let discountedBooks = applyDiscount(books);

		renderBooks(discountedBooks);
	} catch (error) {
		console.error("Erro ao obter os livros da API.", error);
	}
}
