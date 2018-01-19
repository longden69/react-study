import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

const initialState = {
	clicked: 0,
	count: 0
}


const reducer = (state = initialState, action) => {
	// console.log(action)

	switch (action.type) {
		case 'increment':
			return {
				...state,
				count: state.count + 1,
				clicked: state.clicked +1
			}
		
		case 'decrease':
			return {
				...state,
				count: state.count - 1,
				clicked: state.clicked +1
			}
	}

	return state
}

const api = store => {
	return next => {
		return action => {
			console.log('hehe', action)

			if(action.type === 'increment') {
				setTimeout(	
					function() {
						next({
							type: 'decrease'
						})
					}, 0)
			}

			next(action)
		}
	}
}

const store = createStore(
	combineReducers({
		counter: reducer,
		form: formReducer
	}),
	applyMiddleware(api)
	)

// store.subcrible(() => {
//    document.body.innerText = store.getState(); //output in html page
// });

export default store