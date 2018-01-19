import React from 'react' // Missing import
import { connect } from 'react-redux'

import LoginForm from '../LoginForm'

import style from'./style'

function mapStateToProps(state) {
	return { 
		count: state.counter.count,
		clicked: state.counter.clicked,
		loginForm: state.form
	}
}

@connect(mapStateToProps)
class HomePage extends React.Component { // Missing .
	constructor(props) {
		super(props)
		this.dispatchAction = this.dispatchAction.bind(this)
		this.decreaseAction = this.decreaseAction.bind(this)
	}
	render() {
		const { count, clicked, loginForm } = this.props

		return (
			<div>
				<h1 style={style}>My react</h1>
				<div>{count}</div>
				<div>{clicked}</div>
				<button onClick={this.dispatchAction}>Dispatch Action</button>
				<button onClick={this.decreaseAction}>decrease</button>
				<LoginForm onSubmit={this.login} />
			</div>
			)
	}
	dispatchAction() {
		const { dispatch, decrease } = this.props

		dispatch({
			type: 'increment',
			payload: 'yyy'
		})
		// alert('heheheh');
	}

	decreaseAction() {
		const { dispatch} = this.props

		dispatch({
			type: 'decrease',
			payload: 'yyy'
		})
		// alert('heheheh');
	}

	login(form) {
		console.log(form);
	}
	
}

export default HomePage
