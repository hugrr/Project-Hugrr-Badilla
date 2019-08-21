import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import ModalAviso from "../component/modalAviso";

export class Anuncio extends React.Component {
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
													<span className="intro-text-small">Enterate de todo!</span>
													<h1>Avisos</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</header>
							<div id="gtco-features" className="border-bottom">
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-8 col-md-offset-2 text-center gtco-heading ">
											<h2>Avisos</h2>
											<p>
												La comunicacion debe ser fluida, mantente siempre al dia con la
												informacion de tu grupo
											</p>
											<button
												type="button"
												className="btn btn-primary btn-lg"
												data-toggle="modal"
												data-target="#exampleModalLong">
												Crear
											</button>
										</div>
									</div>
									<div className="row">
										{!!store.avisos &&
											store.avisos.map((item, i) => {
												return (
													<div key={i} className="col-md-3 col-sm-6">
														<div className="feature-center">
															<span className="icon">
																<i className="ti-announcement" />
															</span>

															<h3>{item.anuncioName}</h3>

															<p>{item.descripton} </p>
														</div>
													</div>
												);
											})}
									</div>
									<ModalAviso />
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
