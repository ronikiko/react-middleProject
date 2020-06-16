import React, { useReducer } from 'react'
import AppContext from './AppContext'
import appReducer from './AppReducer'
import axios from 'axios'

import {
	SEARCH_USERS_FILTER,
	FETCH_ALL_USERS,
	UPDATE_USER,
} from './types/appTypes'

const AppStateContext = (props) => {
	const initSate = {
		users: [],
		posts: [],
		todos: [],
		filterd: [],
		some: [],
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

	return (
		<AppContext.Provider
			value={{
				users: state.users,
				posts: state.posts,
				todos: state.todos,
				filterd: state.filterd,
				some: state.some,
				getData,
				searchUser,
				updateUser,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppStateContext
