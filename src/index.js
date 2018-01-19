import ReactDOM from 'react-dom' // SAME require
import React from 'react' // Missing import
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import store from './store'
import HomePage from './HomePage'


class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<HomePage />
			</Provider>
			)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('content')
)
