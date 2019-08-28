import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="gtco-nav" role="navigation">
				<div className="gtco-container">
					<div className="row">
						<div className="col-sm-4 col-xs-12">
							<div id="gtco-logo">
								<a href="index.html">
									Like A Club <em>.</em>
								</a>
							</div>
						</div>
						<div className="col-xs-8 text-right menu-1">
							<ul>
								<li>
									<Link to="/usuarios">Mi cuenta</Link>
								</li>
								<li>
									<Link to="/anuncios">Anuncios</Link>
								</li>
								<li className="has-dropdown">
									<a href="#">Eventos</a>
									<ul className="dropdown">
										<li>
											<Link to="/eventos">Ver Eventos</Link>
										</li>
										<li>
											<Link to="/crearEvento">Crear Evento</Link>
										</li>
									</ul>
								</li>
								<li className="has-dropdown">
									<a href="#">Grupo</a>
									<ul className="dropdown">
										<li>
											<Link to="/grupo">Ver Grupo</Link>
										</li>
										<li>
											<Link to="/creargrupo">Crear Grupo</Link>
										</li>
									</ul>
								</li>
								<li className="btn-cta">
									<Link to="/">
										<span>Get started</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
