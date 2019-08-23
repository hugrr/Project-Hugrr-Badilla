import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

export class Grupo extends React.Component {
	constructor(props) {
		super(props);
		this.storeContext = null;
		this.actionsContext = null;
	}
	componentDidMount() {
		this.actionsContext.getMiembro();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.storeContext = store;
					this.actionsContext = actions;
					return (
						<Fragment>
							<header
								id="gtco-header"
								className="gtco-cover gtco-cover-sm"
								role="banner"
								style={{ backgroundImage: "url(images/img_2.jpg)" }}>
								<div className="overlay" />
								<div className="gtco-container">
									<div className="row">
										<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
											<div className="col-md-12 col-md-offset-0 text-left">
												<div className="row row-mt-15em">
													<div className="col-md-7 mt-text">
														<span className="intro-text-small">Bienvenido</span>
														<h1>{store.miembro.userAccount}</h1>
													</div>
												</div>
											</div>
										</Animated>
									</div>
								</div>
							</header>
							<div id="gtco-counter" className="gtco-section">
								<div className="gtco-container">
									<div className="row">
										<Animated
											animationIn="bounceInLeft"
											animationOut="fadeOut"
											isVisible={true}
											data-animate-effect="fadeInLeft">
											<div className="col-md-8 col-md-offset-2 text-center gtco-heading ">
												<h2>Perteneces a la comunidad :</h2>
												<h1> NameGrupo</h1>
												<p>Aqui encontras toda la informacion de tu comunidad.</p>
											</div>
										</Animated>
									</div>
									<div className="row">
										<Animated
											animationIn="bounceInLeft"
											animationOut="fadeOut"
											isVisible={true}
											data-animate-effect="fadeInLeft">
											<div className="col-md-4 col-sm-6">
												<div className="feature-center">
													<span className="icon">
														<i className="ti-pulse" />
													</span>
													<span
														className="counter js-counter"
														data-from="0"
														data-to="10"
														data-speed="500"
														data-refresh-interval="10">
														1
													</span>
													<span className="counter-label">miembros activos</span>
												</div>
											</div>

											<div className="col-md-4 col-sm-6">
												<div className="feature-center">
													<span className="icon">
														<i className="ti-comments-smiley" />
													</span>
													<span
														className="counter js-counter"
														data-from="0"
														data-to="5"
														data-speed="5000"
														data-refresh-interval="50">
														1
													</span>
													<span className="counter-label">anuncios emitidos</span>
												</div>
											</div>
											<div className="col-md-4 col-sm-6 ">
												<div className="feature-center">
													<span className="icon">
														<i className="ti-announcement" />
													</span>
													<span
														className="counter js-counter"
														data-from="0"
														data-to="4"
														data-speed="5000"
														data-refresh-interval="10">
														1
													</span>
													<span className="counter-label">Eventos realizados</span>
												</div>
											</div>
										</Animated>
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
