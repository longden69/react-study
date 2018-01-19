import Radium from 'radium'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const style = {
	button: {
		color: 'green',
		background: 'blue',
		':hover': {
			color: 'white'
		}
	}
}

@reduxForm({
	form: 'login'
})
@Radium
class LoginForm extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<input type="text"/>
				<Field name="userName" type="text" component="input" />
				<button style={style.button} type="submit">Submit</button>
			</form>
			)
	}
}

export default LoginForm
