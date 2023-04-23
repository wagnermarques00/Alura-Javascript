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
	try {
		let searchCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		let convertedSearchCEP = await searchCEP.json();

		if (convertedSearchCEP.erro) {
			throw Error("CEP not found");
		}
		console.log(convertedSearchCEP);
		return convertedSearchCEP;
	} catch (error) {
		console.error(error);
	} finally {
		console.log("Processing done!");
	}
}

// Promise.all is very useful in situations where we need to perform multiple asynchronous operations and wait for all of them to complete before continuing with processing.
// let ceps = ["01001000", "01001001"];
// let cepsSet = ceps.map((value) => searchAdress(value));
// Promise.all(cepsSet).then((response) => console.log(response));
