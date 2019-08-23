import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.props.history;
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
								<header
									id="gtco-header"
									className="gtco-cover"
									role="banner"
									style={{ backgroundImage: "url(images/1.png)" }}>
									<div className="overlay" />
									<div className="gtco-container">
										<div className="row">
											<div className="col-md-12 col-md-offset-0 text-left">
												<div className="row row-mt-15em">
													<div className="col-md-7 mt-text">
														<br />
														<span className="intro-text-small">
															bienvenido a Like A Club
														</span>
														<h2>Organiza tu comunidad</h2>
													</div>

													<div className="col-md-4 col-md-push-1 ">
														<div className="form-wrap">
															<div className="tab">
																<ul className="tab-menu">
																	<li className="gtco-second">
																		<a href="#" data-tab="signup">
																			Registrate
																		</a>
																	</li>
																	<li className="active gtco-first">
																		<a href="#" data-tab="login">
																			iniciar sesion
																		</a>
																	</li>
																</ul>
																<div className="tab-content">
																	<div
																		className="tab-content-inner "
																		data-content="signup">
																		<form
																			action="#"
																			onSubmit={e => actions.handleRegister(e)}>
																			<div className="row form-group">
																				<div className="col-md-12">
																					<label htmlFor="username">
																						usuario
																					</label>
																					<input
																						type="text"
																						className="form-control"
																						name="username"
																						id="username"
																						value={store.username}
																						onChange={e =>
																							actions.handleChange(e)
																						}
																					/>
																				</div>
																			</div>
																			<div className="row form-group">
																				<div className="col-md-12">
																					<label htmlFor="email">Email</label>
																					<input
																						type="email"
																						className="form-control"
																						name="email"
																						id="email"
																						value={store.email}
																						onChange={e =>
																							actions.handleChange(e)
																						}
																					/>
																				</div>
																			</div>
																			<div className="row form-group">
																				<div className="col-md-12">
																					<label htmlFor="password">
																						Contraseña
																					</label>
																					<input
																						type="password"
																						className="form-control"
																						name="password"
																						id="password"
																						value={store.password}
																						onChange={e =>
																							actions.handleChange(e)
																						}
																					/>
																				</div>
																			</div>
																			<div className="row form-group">
																				<div className="col-md-12">
																					<label htmlFor="password2">
																						Confirmar Contraseña
																					</label>
																					<input
																						type="password"
																						className="form-control"
																						name="password2"
																						id="password2"
																						value={store.password2}
																						onChange={e =>
																							actions.handleChange(e)
																						}
																					/>
																				</div>
																			</div>

																			<div className="row form-group">
																				<div className="col-md-12">
																					<input
																						type="submit"
																						className="btn btn-primary"
																						value="Sign up"
																					/>
																				</div>
																			</div>
																		</form>
																	</div>

																	<div
																		className="tab-content-inner active"
																		data-content="login">
																		<form
																			action="#"
																			onSubmit={e =>
																				actions.handleLogin(
																					e,
																					this.props.history
																				)
																			}>
																			<div className="row form-group">
																				<div className="col-md-12">
																					<label htmlFor="username">
																						usuario
																					</label>
																					<input
																						type="text"
																						className="form-control"
																						name="username"
																						id="username"
																						value={store.username}
																						onChange={e =>
																							actions.handleChange(e)
																						}
																					/>
																				</div>
																			</div>
																			<div className="row form-group">
																				<div className="col-md-12">
																					<label htmlFor="password">
																						Contraseña
																					</label>
																					<input
																						type="password"
																						className="form-control"
																						name="password"
																						id="password"
																						value={store.password}
																						onChange={e =>
																							actions.handleChange(e)
																						}
																					/>
																				</div>
																			</div>

																			<div className="row form-group">
																				<div className="col-md-12">
																					<input
																						type="submit"
																						className="btn btn-primary"
																						value="Login"
																					/>
																				</div>
																			</div>
																		</form>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</header>
								<div className="gtco-section border-bottom">
									<div className="gtco-container">
										<div className="row">
											<div className="col-md-8 col-md-offset-2 text-center gtco-heading">
												<h2>¿Que es like a Club?</h2>
												<p>
													Es un gestor de comunidades, el cual busca facilitar la auto
													organización. Es una herramienta útil para la realización de eventos
													y/o actividades, además de integrar a la comunidad como un
													participante activo, manteniendo así una comunicación fluida. Como
													un club.
												</p>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-6">
												<a href="images/img_2.jpg" className="fh5co-project-item image-popup">
													<figure>
														<div className="overlay">
															<i className="ti-plus" />
														</div>
														<img
															src="images/img_2.jpg"
															alt="Image"
															className="img-responsive"
														/>
													</figure>
													<div className="fh5co-text">
														<h2>Constructive heading</h2>
														<p>
															Far far away, behind the word mountains, far from the
															countries Vokalia..
														</p>
													</div>
												</a>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<a href="images/img_3.jpg" className="fh5co-project-item image-popup">
													<figure>
														<div className="overlay">
															<i className="ti-plus" />
														</div>
														<img
															src="images/img_3.jpg"
															alt="Image"
															className="img-responsive"
														/>
													</figure>
													<div className="fh5co-text">
														<h2>Constructive heading</h2>
														<p>
															Far far away, behind the word mountains, far from the
															countries Vokalia..
														</p>
													</div>
												</a>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<a href="images/img_4.jpg" className="fh5co-project-item image-popup">
													<figure>
														<div className="overlay">
															<i className="ti-plus" />
														</div>
														<img
															src="images/img_4.jpg"
															alt="Image"
															className="img-responsive"
														/>
													</figure>
													<div className="fh5co-text">
														<h2>Constructive heading</h2>
														<p>
															Far far away, behind the word mountains, far from the
															countries Vokalia..
														</p>
													</div>
												</a>
											</div>

											<div className="col-lg-4 col-md-4 col-sm-6">
												<a href="images/img_1.jpg" className="fh5co-project-item image-popup">
													<figure>
														<div className="overlay">
															<i className="ti-plus" />
														</div>
														<img
															src="images/img_1.jpg"
															alt="Image"
															className="img-responsive"
														/>
													</figure>
													<div className="fh5co-text">
														<h2>Constructive heading</h2>
														<p>
															Far far away, behind the word mountains, far from the
															countries Vokalia..
														</p>
													</div>
												</a>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<a href="images/img_5.jpg" className="fh5co-project-item image-popup">
													<figure>
														<div className="overlay">
															<i className="ti-plus" />
														</div>
														<img
															src="images/img_5.jpg"
															alt="Image"
															className="img-responsive"
														/>
													</figure>
													<div className="fh5co-text">
														<h2>Constructive heading</h2>
														<p>
															Far far away, behind the word mountains, far from the
															countries Vokalia..
														</p>
													</div>
												</a>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<a href="images/img_6.jpg" className="fh5co-project-item image-popup">
													<figure>
														<div className="overlay">
															<i className="ti-plus" />
														</div>
														<img
															src="images/img_6.jpg"
															alt="Image"
															className="img-responsive"
														/>
													</figure>
													<div className="fh5co-text">
														<h2>Constructive heading</h2>
														<p>
															Far far away, behind the word mountains, far from the
															countries Vokalia..
														</p>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div id="gtco-features" className="border-bottom">
									<div className="gtco-container">
										<div className="row">
											<div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
												<h2>Splash Features</h2>
												<p>
													Dignissimos asperiores vitae velit veniam totam fuga molestias
													accusamus alias autem provident. Odit ab aliquam dolor eius.
												</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-vector" />
													</span>
													<h3>Pixel Perfect</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>
											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-tablet" />
													</span>
													<h3>Fully Responsive</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>
											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-settings" />
													</span>
													<h3>Web Development</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>
											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-ruler-pencil" />
													</span>
													<h3>Web Design</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>

											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-paint-roller" />
													</span>
													<h3>Accent Colours</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>
											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-announcement" />
													</span>
													<h3>Theme Updates</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>
											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-stats-up" />
													</span>
													<h3>Increase Earnings</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>
											<div className="col-md-3 col-sm-6">
												<div
													className="feature-center animate-box"
													data-animate-effect="fadeIn">
													<span className="icon">
														<i className="ti-magnet" />
													</span>
													<h3>Passive Income</h3>
													<p>
														Dignissimos asperiores vitae velit veniam totam fuga molestias
														accusamus alias autem provident.{" "}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div id="gtco-counter" className="gtco-section">
									<div className="gtco-container">
										<div className="row">
											<div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
												<h2>Fun Facts</h2>
												<p>
													Dignissimos asperiores vitae velit veniam totam fuga molestias
													accusamus alias autem provident. Odit ab aliquam dolor eius.
												</p>
											</div>
										</div>

										<div className="row">
											<div
												className="col-md-3 col-sm-6 animate-box"
												data-animate-effect="fadeInLeft">
												<div className="feature-center">
													<span className="icon">
														<i className="ti-settings" />
													</span>
													<span
														className="counter js-counter"
														data-from="0"
														data-to="22070"
														data-speed="5000"
														data-refresh-interval="50">
														1
													</span>
													<span className="counter-label">Creativity Fuel</span>
												</div>
											</div>
											<div
												className="col-md-3 col-sm-6 animate-box"
												data-animate-effect="fadeInLeft">
												<div className="feature-center">
													<span className="icon">
														<i className="ti-face-smile" />
													</span>
													<span
														className="counter js-counter"
														data-from="0"
														data-to="97"
														data-speed="5000"
														data-refresh-interval="50">
														1
													</span>
													<span className="counter-label">Happy Clients</span>
												</div>
											</div>
											<div
												className="col-md-3 col-sm-6 animate-box"
												data-animate-effect="fadeInLeft">
												<div className="feature-center">
													<span className="icon">
														<i className="ti-briefcase" />
													</span>
													<span
														className="counter js-counter"
														data-from="0"
														data-to="402"
														data-speed="5000"
														data-refresh-interval="50">
														1
													</span>
													<span className="counter-label">Projects Done</span>
												</div>
											</div>
											<div
												className="col-md-3 col-sm-6 animate-box"
												data-animate-effect="fadeInLeft">
												<div className="feature-center">
													<span className="icon">
														<i className="ti-time" />
													</span>
													<span
														className="counter js-counter"
														data-from="0"
														data-to="212023"
														data-speed="5000"
														data-refresh-interval="50">
														1
													</span>
													<span className="counter-label">Hours Spent</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div id="gtco-products">
									<div className="gtco-container">
										<div className="row">
											<div className="col-md-8 col-md-offset-2 text-center gtco-heading">
												<h2>More Products</h2>
												<p>
													Dignissimos asperiores vitae velit veniam totam fuga molestias
													accusamus alias autem provident. Odit ab aliquam dolor eius.
												</p>
											</div>
										</div>
										<div className="row">
											<div className="owl-carousel owl-carousel-carousel">
												<div className="item">
													<a href="#">
														<img
															src="images/img_1.jpg"
															alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
														/>
													</a>
												</div>
												<div className="item">
													<a href="#">
														<img
															src="images/img_2.jpg"
															alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
														/>
													</a>
												</div>
												<div className="item">
													<a href="#">
														<img
															src="images/img_3.jpg"
															alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
														/>
													</a>
												</div>
												<div className="item">
													<a href="#">
														<img
															src="images/img_4.jpg"
															alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div id="gtco-subscribe">
									<div className="gtco-container">
										<div className="row animate-box">
											<div className="col-md-8 col-md-offset-2 text-center gtco-heading">
												<h2>Subscribe</h2>
												<p>Be the first to know about the new templates.</p>
											</div>
										</div>
										<div className="row animate-box">
											<div className="col-md-8 col-md-offset-2">
												<form className="form-inline">
													<div className="col-md-6 col-sm-6">
														<div className="form-group">
															<label htmlFor="email" className="sr-only">
																Email
															</label>
															<input
																type="email"
																className="form-control"
																id="email"
																placeholder="Your Email"
															/>
														</div>
													</div>
													<div className="col-md-6 col-sm-6">
														<button type="submit" className="btn btn-default btn-block">
															Subscribe
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</Animated>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
Home.propTypes = {
	history: PropTypes.object
};
