import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Usuarios } from "./views/user";
import { Anuncio } from "./views/anuncio";
import { modificarUsuario } from "./views/modprofile";
import { Grupo } from "./views/grupo";
import { CrearEvento } from "./views/crearEvento";
import { Evento } from "./views/evento";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { ModalEvento } from "./component/modalEvento";

import { Context } from "./store/appContext";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.storeContext = store;
					this.actionsContext = actions;
					return (
						<div className="page-inner">
							<BrowserRouter basename={basename}>
								<Fragment>
									<Navbar />
									<Switch>
										<Route exact path="/" component={Home} />
										<Route path="/usuarios" component={Usuarios} />
										<Route path="/anuncios" component={Anuncio} />
										<Route path="/modprofile" component={modificarUsuario} />
										<Route path="/grupo" component={Grupo} />
										<Route path="/crearEvento" component={CrearEvento} />
										<Route path="/eventos" component={Evento} />
										<Route render={() => <h1>Not found!</h1>} />
									</Switch>
									<Footer />
								</Fragment>
							</BrowserRouter>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default injectContext(Layout);
