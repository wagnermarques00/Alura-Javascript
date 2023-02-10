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

function createElementToList(elementName, elementQuantity) {
	const itemQuantity = document.createElement("strong");
	const element = document.createElement("li");

	itemQuantity.innerHTML = elementQuantity;

	element.classList.add("list__item");
	element.appendChild(itemQuantity);
	element.innerHTML += elementName;

	return element;
}

function appendItemToList(item) {
	const list = document.getElementById("list");
	list.appendChild(item);
}
