const getState = ({ getStore, setStore }) => {
	return {
		store: {
			token: {
				refresh: "",
				access: ""
			},
			login: false,
			grupo: {
				grupoName: "",
				terminos: "",
				media: ""
			}
		},
		actions: {
			SaveText: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("http://127.0.0.1:8000/api/anuncio/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},

			saveUser: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("http://127.0.0.1:8000/api/miembro/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},
			SendToken: (data, route) => {
				if (data != "") {
				} else {
					alert("debes ingresar datos");
				}
				const store = getStore();
				fetch("http://127.0.0.1:8000/api/token/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ token: data, login: true });
						console.log(data);
						route.push("/usuarios");
					});
			},
			SaveTextEvento: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);
				fetch("http://127.0.0.1:8000/api/evento/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},
			GetGroup: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("http://127.0.0.1:8000/api/grupo/", {
					method: "Get",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({ grupo: data });
					});

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
};

export default getState;
