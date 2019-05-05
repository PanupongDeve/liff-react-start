import {  Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';

import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';


import configStore, { history } from './redux/config';

import React from 'react';
import './App.css';

import {
	View1,
	View2
} from './views';

const store = configStore();

const App = () => (
	<Provider store={store}>
		<div>
			<Router history={history}>
				<Switch>
					<div>
						<Route exact path="/" component={View1} />
						<Route exact path="/view2" component={View2} />
					</div>
				</Switch>
			</Router>
			<NotificationsSystem theme={theme} />
		</div>
	</Provider>
)

export default App;
