const form = document.getElementById("add-item");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = event.target.elements[0].value;
	const quantity = event.target.elements[1].value;

	renderElementToList(name, quantity);
});

function renderElementToList(name, quantity) {
	const itemCreated = createElementToList(name, quantity);
	appendItemToList(itemCreated);
}

function createElementToList(name, quantity) {
	const itemQuantity = document.createElement("strong");
	const newItem = document.createElement("li");

	itemQuantity.innerHTML = quantity;

	newItem.classList.add("list__item");
	newItem.appendChild(itemQuantity);
	newItem.innerHTML += name;

	return newItem;
}

function appendItemToList(itemCreated) {
	const list = document.getElementById("list");
	list.appendChild(itemCreated);
}
