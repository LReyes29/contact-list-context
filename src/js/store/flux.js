const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: [] //Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ data: data }));
			},

			onCreate: data => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getContacts("https://assets.breatheco.de/apis/fake/contact/agenda/eli"));
			},

			onUpdate: (data, id) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getContacts("https://assets.breatheco.de/apis/fake/contact/agenda/eli"));
			},

			onDelete: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(() => getActions().getContacts("https://assets.breatheco.de/apis/fake/contact/agenda/eli"));
			}
		}
	};
};

export default getState;
