// let searchCEP = fetch("https://viacep.com.br/ws/01001000/json/")
// 	.then((response) => response.json())
// 	.then((response) => {
// 		if (response.erro) {
// 			throw Error("CEP not found");
// 		} else {
// 			console.log(response);
// 		}
// 	})
// 	.catch((error) => console.warn(error))
// 	.finally(console.log("Processing done!"));

async function searchAdress(cep) {
	let errorMessage = document.getElementById("cep-error");
	errorMessage.innerHTML = "";

	try {
		let searchCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		let convertedSearchCEP = await searchCEP.json();

		if (convertedSearchCEP.erro) {
			throw Error("CEP not found");
		}

		let street = document.getElementById("address");
		let complement = document.getElementById("complement");
		let neighborhood = document.getElementById("neighborhood");
		let city = document.getElementById("city");
		let state = document.getElementById("state");

		street.value = convertedSearchCEP.logradouro;
		complement.value = convertedSearchCEP.complemento;
		neighborhood.value = convertedSearchCEP.bairro;
		city.value = convertedSearchCEP.localidade;
		state.value = convertedSearchCEP.uf;

		console.log(convertedSearchCEP);
		return convertedSearchCEP;
	} catch (error) {
		errorMessage.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
		console.error(error);
	} finally {
		console.log("Processing done!");
	}
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => searchAdress(cep.value));
// Promise.all is very useful in situations where we need to perform multiple asynchronous operations and wait for all of them to complete before continuing with processing.
// let ceps = ["01001000", "01001001"];
// let cepsSet = ceps.map((value) => searchAdress(value));
// Promise.all(cepsSet).then((response) => console.log(response));
