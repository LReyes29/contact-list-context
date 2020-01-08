import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Luis from "../../img/LRS.png";
import { Context } from "./../store/appContext";

export const ContactCard = props => {
	const { store, actions, setStore } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});
	const [dataContact, setDataContact] = useState({
		full_name: props.fullname,
		agenda_slug: "eli",
		email: props.email,
		phone: props.phone,
		address: props.address
	});

	function onTransit(e, name) {
		const data = Object.assign({}, dataContact);
		data[name] = e.target.value;
		setDataContact(data);
	}

	return (
		<>
			<li className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img src={Luis} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className="float-right">
							<button
								type="button"
								className="btn"
								data-toggle="modal"
								data-target={"#exampleModal" + props.id}>
								<i className="fas fa-pencil-alt mr-3" />
							</button>
							<button className="btn" onClick={() => actions.onDelete(props.id)}>
								<i className="fas fa-trash-alt" />
							</button>
						</div>
						<label className="name lead">{props.fullname}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">{props.address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<span className="text-muted small">{props.phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">{props.email}</span>
					</div>
				</div>
			</li>

			<div
				className="modal fade"
				id={"exampleModal" + props.id}
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Update Contact
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input
										type="text"
										onChange={e => onTransit(e, "full_name")}
										className="form-control"
										value={dataContact.full_name}
									/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										onChange={e => onTransit(e, "email")}
										className="form-control"
										value={dataContact.email}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										type="phone"
										onChange={e => onTransit(e, "phone")}
										className="form-control"
										value={dataContact.phone}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										type="text"
										onChange={e => onTransit(e, "address")}
										className="form-control"
										value={dataContact.address}
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								data-dismiss="modal"
								onClick={() => actions.onUpdate(dataContact, props.id)}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,

	id: PropTypes.string,
	fullname: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	index: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
