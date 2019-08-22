import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class modificarUsuario extends React.Component {
	constructor(props) {
		super(props);
		this.storeContext = null;
		this.actionsContext = null;
		this.props.history;
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
										<div className="col-md-12 col-md-offset-0 text-left">
											<div className="row row-mt-15em">
												<div className="col-md-7 mt-text">
													<h1>{store.miembro.userAccount}</h1>
													<span className="intro-text-small">
														manten actualizado tus datos, recuerda que la comunicacion debe
														ser fluida
													</span>
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
												<h3>Mis Datos</h3>
												<form
													action="#"
													onSubmit={e => actions.handleUser(e, this.props.history)}>
													<div className="row form-group">
														<div className="col-md-12">
															<label className="sr-only" htmlFor="name">
																nombre
															</label>
															<input
																name="userAccount"
																id="userAccount"
																placeholder={store.miembro.userAccount}
																onChange={e => actions.handleMiembro(e)}
																type="text"
																className="form-control"
															/>
														</div>
													</div>

													<div className="row form-group">
														<div className="col-md-12">
															<label className="sr-only" htmlFor="email">
																Email
															</label>
															<input
																name="mail"
																id="mail"
																placeholder={store.miembro.mail}
																onChange={e => actions.handleMiembro(e)}
																type="email"
																className="form-control"
															/>
														</div>
													</div>

													<div className="row form-group">
														<div className="col-md-12">
															<label className="sr-only" htmlFor="subject">
																Fecha de Nacimiento
															</label>
															<input
																name="fecha_nacimiento"
																id="fecha_nacimiento"
																placeholder={store.miembro.fecha_nacimiento}
																onChange={e => actions.handleMiembro(e)}
																type="date"
																className="form-control"
															/>
														</div>
													</div>
													<div className="row form-group">
														<div className="col-md-12">
															<label className="sr-only" htmlFor="subject">
																Telefono
															</label>
															<input
																name="phone"
																id="phone"
																onChange={e => actions.handleMiembro(e)}
																type="text"
																className="form-control"
																placeholder={store.miembro.phone}
															/>
														</div>
													</div>
													<div className="form-group">
														<input
															type="submit"
															value="modificar"
															className="btn btn-primary"
														/>
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
modificarUsuario.propTypes = {
	history: PropTypes.object
};
