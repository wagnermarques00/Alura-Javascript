function applyDiscount(books) {
	const discount = 0.3;

	discountedBooks = books.map((book) => {
		return { ...book, preco: book.preco - book.preco * discount };
	});
	console.log(discountedBooks);
	return discountedBooks;
}
