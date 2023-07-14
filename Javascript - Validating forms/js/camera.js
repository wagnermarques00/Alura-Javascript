const startCameraButton = document.querySelector("[data-video-button]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const takePhotoButton = document.querySelector("[data-take-photo]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-message]");
const sendPhotoButton = document.querySelector("[data-send]");

let imageURL = "";

startCameraButton.addEventListener("click", async function () {
	const startVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

	startCameraButton.style.display = "none";
	cameraField.style.display = "block";

	video.srcObject = startVideo;
});

takePhotoButton.botaoEnviarFoto.addEventListener("click", () => {
	const receiveData = localStorage.getItem("cadastro");
	const convertReturn = JSON.parse(receiveData);

	convertReturn.image = imageURL;

	localStorage.setItem("cadastro", JSON.stringify(convertReturn));

	window.location.href = "../pages/open-account-form-3.html";
});
