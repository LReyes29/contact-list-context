import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "./../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	useEffect(() => {
		actions.getContacts("https://assets.breatheco.de/apis/fake/contact/agenda/eli");
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.data.map((item, i) => {
							return (
								<ContactCard
									id={item.id}
									fullname={item.full_name}
									email={item.email}
									phone={item.phone}
									address={item.address}
									key={i}
									index={i}
									onDelete={() => setState({ showModal: true })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
