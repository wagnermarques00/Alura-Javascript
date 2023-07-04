import { connectApi } from "./connectApi.js";

const list = document.querySelector("[data-list-video]");

export default function createCard(title, description, url, image) {
	const video = document.createElement("li");
	video.className = "videos__item";
	video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}" title="${title}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<div class="video-description">
            <img src="${image}" alt="logo canal alura" />
            <h3>${title}</h3>
            <p>${description}</p>
		</div>
    `;

	return video;
}

async function listVideos() {
	const listApi = await connectApi.listVideos();
	listApi.forEach((element) =>
		list.appendChild(createCard(element.title, element.description, element.url, element.image))
	);
}

listVideos();
