let searchCEP = fetch("https://viacep.com.br/ws/01001000/json/")
	.then((response) => response.json())
	.then((response) => {
		if (response.erro) {
			throw Error("CEP not found");
		} else {
			console.log(response);
		}
	})
	.catch((error) => console.warn(error))
	.finally((message) => console.log("Processing done!"));
