const getState = ({ getStore, setStore }) => {
	return {
		store: {
			token: {
				refresh: "",
				access: ""
			},
			login: "",
			avisos: [],
			grupo: [],
			miembros: [],
			miembro: {}
		},
		actions: {
			SaveAviso: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("https://3000-e85855c4-1fac-4e5f-bbdb-814be26f18d5.ws-us0.gitpod.io/api/anuncio/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						this.state.action.GetAviso();
					});

				//reset the global store
				//setStore({ demo: demo });
			},

			saveUser: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("https://3000-b47668b8-e8af-4230-a765-0fbd9d1240c6.ws-us0.gitpod.io/api/miembro/", {
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
				fetch("https://3000-e85855c4-1fac-4e5f-bbdb-814be26f18d5.ws-us0.gitpod.io/api/token/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ token: data, login: true });
						localStorage.setItem("token", data.access);
						console.log(data);
						route.push("/usuarios");
					});
			},
			setToken: newToken => {
				setStore({ token: { access: newToken, refresh: "" }, login: true });
			},
			SaveEvento: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);
				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/evento/", {
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
			saveGrupo: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("https://3000-b47668b8-e8af-4230-a765-0fbd9d1240c6.ws-us0.gitpod.io/api/grupo/", {
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
				fetch("https://3000-b47668b8-e8af-4230-a765-0fbd9d1240c6.ws-us0.gitpod.io/api/grupo/", {
					method: "Get",
					headers: {
						Authorization: "Bearer " + getStore().token.access
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp && typeof resp === "object" && resp.constructor === Array) {
							setStore({ grupo: resp });
							console.log(resp);
						}
					});
			},
			GetProfile: () => {
				fetch("https://3000-b47668b8-e8af-4230-a765-0fbd9d1240c6.ws-us0.gitpod.io/api/profile", {
					method: "Get",
					headers: {
						Authorization: "Bearer " + getStore().token.access
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp && typeof resp === "object" && resp.constructor === Object) {
							setStore({ miembro: resp });
						}
					});
			},
			GetUser: () => {
				fetch("https://3000-b47668b8-e8af-4230-a765-0fbd9d1240c6.ws-us0.gitpod.io/api/profile", {
					method: "Get",
					headers: {
						Authorization: "Bearer " + getStore().token.access
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp && typeof resp === "object" && resp.constructor === Array) {
							setStore({ miembros: resp });
						}
					});
			},

			GetAviso: () => {
				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/anuncio/", {
					method: "Get",
					headers: {
						Authorization: "Bearer " + getStore().token.access
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp && typeof resp === "object" && resp.constructor === Array) {
							setStore({ avisos: resp });
						}
					});
			}
		}
	};
};

export default getState;
