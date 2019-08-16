import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class Anuncio extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card text-white bg-dark mb-3">
					<div className="card-header">hola</div>
					<div className="card-body">
						<h5 className="card-title">buen diaa!</h5>
						<p className="card-text">Te damos la bienvenida a LIke a Club</p>
					</div>
				</div>
			</div>
		);
	}
}
