const form = document.getElementById("add-item");
const list = document.getElementById("list");
const items = JSON.parse(localStorage.getItem("items")) || [];

items.forEach((element) => {
	createElement(element);
});

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const actualIndex = items.findIndex((element) => element.id === exists.id);
	const exists = items.find((element) => element.name === name.value);
	const name = event.target.elements["name"];
	const quantity = event.target.elements["quantity"];

	const actualItem = {
		name: name.value,
		quantity: quantity.value,
	};

	if (exists) {
		actualItem.id = exists.id;
		updateElement(actualItem);
		items[actualIndex] = actualItem;
	} else {
		actualItem.id = items[items.length - 1] ? items[items.length - 1].id + 1 : 0;
		createElement(actualItem);

		items.push(actualItem);
	}

	localStorage.setItem("items", JSON.stringify(items));

	name.value = "";
	quantity.value = "";
});

function createElement(item) {
	const itemQuantity = document.createElement("strong");
	const newItem = document.createElement("li");

	itemQuantity.innerHTML = item.quantity;
	itemQuantity.dataset.id = item.id;

	newItem.classList.add("list__item");
	newItem.appendChild(itemQuantity);
	newItem.innerHTML += item.name;
	newItem.appendChild(deleteButton(item.id));

	list.appendChild(newItem);
}

function updateElement(item) {
	const itemQuantity = document.querySelector(`[data-id="${item.id}"]`).innerHTML;
	itemQuantity = item.quantity;
}

function deleteElement(tag, id) {
	tag.remove();

	const indexToRemove = items.findIndex(({ id: itemId }) => itemId === id);
	items.splice(indexToRemove, 1);

	localStorage.setItem("items", JSON.stringify(items));
}

function deleteButton(id) {
	const elementButton = document.createElement("button");

	elementButton.innerText = "Deletar";
	elementButton.classList.add("list__item__button-delete");

	elementButton.addEventListener("click", function () {
		deleteElement(this.parentNode, id);
	});

	return elementButton;
}
