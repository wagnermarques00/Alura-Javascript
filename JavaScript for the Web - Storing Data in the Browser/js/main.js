const form = document.getElementById("add-item");
const list = document.getElementById("list");
const items = JSON.parse(localStorage.getItem("items")) || [];

items.forEach((element) => {
	createElement(element);
});

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = event.target.elements["name"];
	const quantity = event.target.elements["quantity"];
	const exists = items.find((element) => element.name === name.value);

	const actualItem = {
		name: name.value,
		quantity: quantity.value,
	};

	if (exists) {
		actualItem.id = exists.id;

		updateElement(actualItem);

		items[items.findIndex((element) => element.id === exists.id)] = actualItem;
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
	const newItem = document.createElement("li");
	newItem.classList.add("list__item");

	const itemQuantity = document.createElement("strong");
	itemQuantity.innerHTML = item.quantity;
	itemQuantity.dataset.id = item.id;
	newItem.appendChild(itemQuantity);

	newItem.innerHTML += item.name;

	newItem.appendChild(deleteButton(item.id));

	list.appendChild(newItem);
}

function updateElement(item) {
	document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantity;
}

function deleteButton(id) {
	const elementButton = document.createElement("button");
	elementButton.innerText = "Deletar";

	elementButton.addEventListener("click", function () {
		deleteElement(this.parentNode, id);
	});

	return elementButton;
}

function deleteElement(tag, id) {
	tag.remove();

	items.splice(
		items.findIndex((element) => element.id === id),
		1
	);

	localStorage.setItem("items", JSON.stringify(items));
}
