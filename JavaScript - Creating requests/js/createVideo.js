import { connectApi } from "./connectApi";

const form = document.querySelector("[data-form-video]");

async function createVideo(event) {
	event.preventDefault();

	const description = Math.floor(Math.random() * 10).toString();
	const image = document.querySelector("[data-image-video]").value;
	const title = document.querySelector("[data-title-video]").value;
	const url = document.querySelector("[data-url-video]").value;

	await connectApi.createVideo(title, description, url, image);

	window.location.href = "../pages/submission-completed.html";
}

form.addEventListener("submit", (event) => createVideo(event));
