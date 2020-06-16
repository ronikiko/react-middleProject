import React, { useReducer } from 'react'
import AppContext from './AppContext'
import appReducer from './AppReducer'
import axios from 'axios'

import {
	SEARCH_USERS_FILTER,
	FETCH_ALL_USERS,
	UPDATE_USER,
	SET_ALERT,
	DELETE_USER,
	SET_ALERT_MSG
} from './types/appTypes'

const AppStateContext = (props) => {
	const initSate = {
		users: [],
		posts: [],
		todos: [],
		filterd: [],
		setAlert: false,
		alertMsg:''
	}

	const [state, dispatch] = useReducer(appReducer, initSate)

	const getData = async () => {
		const users = await axios.get('https://jsonplaceholder.typicode.com/users')
		dispatch({ type: FETCH_ALL_USERS, payload: users.data })
	}

	const searchUser = (query) => {
		dispatch({ type: SEARCH_USERS_FILTER, payload: query })
	}

	const updateUser = (user) => {
		console.log(user)
		dispatch({ type: UPDATE_USER, payload: user })
	}

	const setAlertToDispaly = (type) => {
		dispatch({type: SET_ALERT, payload: type})
	}
	const setAlertMessageToDispaly = (msg) => {
		dispatch({type: SET_ALERT_MSG, payload: msg})
	}

	const deleteUser = (id) => {
		dispatch({type: DELETE_USER, payload: id})
	}
	return (
		<AppContext.Provider
			value={{
				users: state.users,
				posts: state.posts,
				todos: state.todos,
				filterd: state.filterd,
				setAlert: state.setAlert,
				alertMsg: state.alertMsg,
				getData,
				searchUser,
				updateUser,
				setAlertToDispaly,
				deleteUser,
				setAlertMessageToDispaly
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppStateContext
