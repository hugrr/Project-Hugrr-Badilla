import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class Anuncio extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card text-white bg-success mb-3">
					<div className="card-header">aviso</div>
					<div className="card-body">
						<h5 className="card-title">avisoNAme</h5>
						<p className="card-text">descripton</p>
					</div>
				</div>
			</div>
		);
	}
}
