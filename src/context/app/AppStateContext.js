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
	SET_ALERT_MSG,
	FETCH_ALL_POSTS,
	FETCH_ALL_TODOS,
	PASS_USER_ID,
	USER_TODO_BY_ID,
	TODO_MARK_AS_COMPLETED,
	USER_POST_BY_ID,
	ADD_NEW_TODO,
	ADD_NEW_POST,
	ADD_NEW_USER
} from './types/appTypes'

const AppStateContext = (props) => {
	const initSate = {
		users: [],
		posts: [],
		userPosts: [],
		todos: [],
		userTodos: [],
		filterd: [],
		setAlert: false,
		alertMsg: '',
		userID: null,
	}

	const [state, dispatch] = useReducer(appReducer, initSate)

	const getData = async (action) => {
		switch (action) {
			case 'users':
				const users = await axios.get(
					'https://jsonplaceholder.typicode.com/users'
				)
				dispatch({ type: FETCH_ALL_USERS, payload: users.data })
					break
			case 'posts':
				const posts = await axios.get(
					'https://jsonplaceholder.typicode.com/posts'
				)
				dispatch({ type: FETCH_ALL_POSTS, payload: posts.data })
				break
			case 'todos':
				const todos = await axios.get(
					'https://jsonplaceholder.typicode.com/todos'
				)
				dispatch({ type: FETCH_ALL_TODOS, payload: todos.data })
				break
			default:
				return []
		}
	}

	const searchUser = (query) => {
		dispatch({ type: SEARCH_USERS_FILTER, payload: query })
	}

	const updateUser = (user) => {
		//console.log(user)
		dispatch({ type: UPDATE_USER, payload: user })
	}

	const setAlertToDispaly = (type) => {
		dispatch({ type: SET_ALERT, payload: type })
	}
	const setAlertMessageToDispaly = (msg) => {
		dispatch({ type: SET_ALERT_MSG, payload: msg })
	}

	const deleteUser = (id) => {
		dispatch({ type: DELETE_USER, payload: id })
	}

	const userTodoById = (id) => {
		dispatch({ type: USER_TODO_BY_ID, payload: id })
	}

	const userPostById = (id) => {
		dispatch({ type: USER_POST_BY_ID, payload: id })
	}

	const userIdPass = (userID) => {
		dispatch({ type: PASS_USER_ID, payload: userID })
	}

	const markAsCompletedState = (todo) => {
		dispatch({ type: TODO_MARK_AS_COMPLETED, payload: todo })
	}

	const addNewTodo = (todo) => {
		dispatch({type: ADD_NEW_TODO, payload: todo})
	}

	const addNewPost = (post) => {
		dispatch({type: ADD_NEW_POST, payload: post})
	}

	const addNewUser = (user) => {
		dispatch({type: ADD_NEW_USER, payload: user})
	}
	return (
		<AppContext.Provider
			value={{
				users: state.users,
				posts: state.posts,
				todos: state.todos,
				userTodos: state.userTodos,
				userPosts: state.userPosts,
				filterd: state.filterd,
				setAlert: state.setAlert,
				alertMsg: state.alertMsg,
				userID: state.userID,
				getData,
				searchUser,
				updateUser,
				setAlertToDispaly,
				deleteUser,
				setAlertMessageToDispaly,
				userIdPass,
				userTodoById,
				markAsCompletedState,
				userPostById,
				addNewTodo,
				addNewPost,
				addNewUser
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppStateContext
