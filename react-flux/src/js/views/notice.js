import React from "react";
import Modal from "../component/modal";

//create your first component
export class Notice extends React.Component {
	render() {
		return (
			<div className="card">
				<img
					src="https://st2.depositphotos.com/1008939/7972/i/450/depositphotos_79723078-stock-photo-three-friends-drinking-a-glass.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title" />
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the content.
					</p>
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#exampleModalLong">
						Crear Aviso
					</button>
					<Modal />
				</div>
			</div>
		);
	}
}
