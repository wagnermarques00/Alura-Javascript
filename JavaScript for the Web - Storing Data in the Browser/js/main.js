const form = document.getElementById("add-item");
const items = [];

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = event.target.elements[0];
	const quantity = event.target.elements[1];

	renderElementToList(name.value, quantity.value);
	saveToLocalStorage(name.value, quantity.value);

	name.value = "";
	quantity.value = "";
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

function saveToLocalStorage(itemName, itemQuantity) {
	const actualItem = {
		name: itemName,
		quantity: itemQuantity,
	};

	items.push(actualItem);

	localStorage.setItem("items", JSON.stringify(items));
}
