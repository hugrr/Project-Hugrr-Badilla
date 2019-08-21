import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Evento extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<header
								id="gtco-header"
								className="gtco-cover gtco-cover-sm"
								role="banner"
								style={{ backgroundImage: "url(images/img_1.jpg)" }}>
								<div className="overlay" />
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-12 col-md-offset-0 text-left">
											<div className="row row-mt-15em">
												<div
													className="col-md-7 mt-text animate-box"
													data-animate-effect="fadeInUp">
													<span className="intro-text-small">Acá nos reunimos!</span>
													<h1>Eventos </h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</header>
							<div id="gtco-features" className="border-bottom">
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
											<h2>Eventos</h2>
											<p>
												La comunicacion debe ser fluida, mantente siempre al dia con la
												informacion de tu grupo
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 col-sm-6">
											<div className="feature-center animate-box" data-animate-effect="fadeIn">
												<span className="icon">
													<i className="ti-announcement" />
												</span>
												<h3>Carrete clumpleaños hugo</h3>
												<p>vamos a festejar el cumple de hugo, todos invitados </p>
											</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="feature-center animate-box" data-animate-effect="fadeIn">
												<span className="icon">
													<i className="ti-rocket" />
												</span>
												<h3>Fumaton</h3>
												<p>nos juntaremos a vivir la experiencia high 420</p>
											</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="feature-center animate-box" data-animate-effect="fadeIn">
												<span className="icon">
													<i className="ti-announcement" />
												</span>
												<h3>Despedida full Time</h3>
												<p>vamos a festejar el cumple de hugo, todos invitados </p>
											</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="feature-center animate-box" data-animate-effect="fadeIn">
												<span className="icon">
													<i className="ti-announcement" />
												</span>
												<h3>Hackaton 4Geeks</h3>
												<p>todos invitados a cambiar el mundo </p>
											</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="feature-center animate-box" data-animate-effect="fadeIn">
												<span className="icon">
													<i className="ti-gift" />
												</span>
												<h3>regalo pc que no uso</h3>
												<p>amigos tengo un pc que no uso, por si alguien lo necesita </p>
											</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="feature-center animate-box" data-animate-effect="fadeIn">
												<span className="icon">
													<i className="ti-gift" />
												</span>
												<h3>permuto mouse </h3>
												<p>
													amigos tengo un mouse que no uso, por si alguien lo quiere cambiar{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
