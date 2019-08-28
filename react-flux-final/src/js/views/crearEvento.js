import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ModalEvento from "../component/modalEvento";
import PropTypes from "prop-types";

export class CrearEvento extends React.Component {
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
												<div className="col-md-7 mt-text ">
													<span className="intro-text-small"> tu tiempo ..tu espacio</span>
													<h1>Crea Un Evento</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</header>
							<div className="gtco-section border-bottom">
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-12">
											<div className="col-md-6 ">
												<h3>Crear nuevo evento</h3>
												<form
													action="#"
													onSubmit={e => actions.handleevento(e, this.props.history)}>
													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<span className="icon">
																	<i className="ti-announcement" />
																</span>
																<div className="feature-copy">
																	<input
																		name="userAccount"
																		id="userAccount"
																		placeholder="nombre del evento"
																		//onChange={e => actions.handleMiembro(e)}
																		type="text"
																		className="form-control"
																	/>
																</div>
															</div>
														</div>
													</div>

													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<span className="icon">
																	<i className="ti-ink-pen" />
																</span>
																<div className="feature-copy">
																	<input
																		name="mail"
																		id="mail"
																		placeholder="ingresa la direccion.."
																		//onChange={e => actions.handleMiembro(e)}
																		type="text"
																		className="form-control"
																	/>
																</div>
															</div>
														</div>
													</div>
													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<span className="icon">
																	<i className="ti-calendar" />
																</span>
																<div className="feature-copy">
																	<input
																		name="date"
																		id="date"
																		placeholder="fecha del evento"
																		//onChange={e => actions.handleMiembro(e)}
																		type="date"
																		className="form-control"
																	/>
																</div>
															</div>
														</div>
													</div>
													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<span className="icon">
																	<i className="ti-timer" />
																</span>
																<div className="feature-copy">
																	<input
																		name="date"
																		id="date"
																		placeholder="fecha del evento"
																		//onChange={e => actions.handleMiembro(e)}
																		type="time"
																		className="form-control"
																	/>
																</div>
															</div>
														</div>
													</div>
													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<span className="icon">
																	<i className="ti-credit-card" />
																</span>
																<div className="feature-copy">
																	<input
																		name="costo"
																		id="date"
																		placeholder="costo"
																		//onChange={e => actions.handleMiembro(e)}
																		type="text"
																		className="form-control"
																	/>
																</div>
															</div>
														</div>
													</div>

													<div className="form-group">
														<Link to="/eventos" className="btn btn-primary">
															Crear evento
														</Link>
													</div>
												</form>
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
CrearEvento.propTypes = {
	history: PropTypes.object
};
