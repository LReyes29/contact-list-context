import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [dataContact, setDataContact] = useState({
		full_name: "",
		agenda_slug: "eli",
		email: "",
		phone: "",
		address: ""
	});

	function onTransit(e, name) {
		const data = Object.assign({}, dataContact);
		data[name] = e.target.value;
		setDataContact(data);
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							onChange={e => onTransit(e, "full_name")}
							value={dataContact.full_name}
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							onChange={e => onTransit(e, "email")}
							value={dataContact.email}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							onChange={e => onTransit(e, "phone")}
							value={dataContact.phone}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							onChange={e => onTransit(e, "address")}
							value={dataContact.address}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>

					<Link to="/add">
						<button
							type="button"
							onClick={() => {
								actions.onCreate(dataContact);
								setDataContact({
									full_name: "",
									agenda_slug: "eli",
									email: "",
									phone: "",
									address: ""
								});
							}}
							className="btn btn-primary form-control">
							Save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						Get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
