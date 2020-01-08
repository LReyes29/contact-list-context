import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	let dataContact = {
		full_name: "",
		agenda_slug: "eli",
		email: "",
		phone: "",
		address: ""
	};

	function onTransit(e, name) {
		dataContact[name] = e.target.value;
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
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							onBlur={e => onTransit(e, "email")}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							onBlur={e => onTransit(e, "phone")}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							onBlur={e => onTransit(e, "address")}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						type="button"
						onClick={() => actions.onCreate(dataContact)}
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
