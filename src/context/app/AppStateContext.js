import React, { useReducer } from 'react'
import AppContext from './AppContext'
import { getApiDataByType } from '../../api/getDataFromApi'
import appReducer from './AppReducer'
import { SEARCH_USERS_FILTER, FETCH_ALL_USERS } from './types/appTypes'

const AppStateContext = (props) => {
	const initSate = {
		users: [],
		posts: [],
		todos: [],
		filterd: [],
		
	}

	const [state, dispatch] = useReducer(appReducer, initSate)

	const getData = async (dataType) => {
		const users = await getApiDataByType('users')
		dispatch({ type: FETCH_ALL_USERS, payload: users })
	}

	const searchUser = (query) => {
		dispatch({ type: SEARCH_USERS_FILTER, payload: query })
	}


	return (
		<AppContext.Provider
			value={{
				users: state.users,
				posts: state.posts,
				todos: state.todos,
				filterd: state.filterd,
			
				getData,
				searchUser,
				
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppStateContext
