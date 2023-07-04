import { connectApi } from "./connectApi.js";
import createCard from "./showVideos.js";

async function searchVideo(event) {
	event.preventDefault();

	const list = document.querySelector("[data-list-video]");
	const searchData = document.querySelector("[data-search-video]").value;
	const search = await connectApi.searchVideo(searchData);

	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}

	search.forEach((element) => {
		list.appendChild(createCard(element.title, element.description, element.url, element.image));
	});
}

const searchButton = document.querySelector("[data-search-button]");
searchButton.addEventListener("click", (event) => searchVideo(event));
