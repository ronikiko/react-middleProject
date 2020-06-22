import {
	SEARCH_USERS_FILTER,
	FETCH_ALL_USERS,
	UPDATE_USER,
	SET_ALERT,
	DELETE_USER,
	SET_ALERT_MSG,
	FETCH_ALL_TODOS,
	FETCH_ALL_POSTS,
	PASS_USER_ID,
	USER_TODO_BY_ID,
	TODO_MARK_AS_COMPLETED,
	USER_POST_BY_ID,
} from './types/appTypes'

export default (state, action) => {
	switch (action.type) {
		case FETCH_ALL_USERS:
			return {
				...state,
				users: action.payload,
			}
		case FETCH_ALL_POSTS:
			return {
				...state,
				posts: action.payload,
			}
		case FETCH_ALL_TODOS:
			return {
				...state,
				todos: action.payload,
			}
		case TODO_MARK_AS_COMPLETED:
			return {
				...state,
				userTodos: state.userTodos.map((todo) =>
					todo.id === action.payload.id ? { ...action.payload } : todo
				),
			}
		case USER_TODO_BY_ID:
			return {
				...state,
				userTodos: state.todos.filter((todo) => todo.userId === action.payload),
			}

		case USER_POST_BY_ID:
			return {
				...state,
				userPosts: state.posts.filter((post) => post.userId === action.payload),
			}
		case SEARCH_USERS_FILTER:
			if (action.payload === '') {
				return {
					...state,
					filterd: state.users,
				}
			}
			return {
				...state,
				filterd: state.users.filter(
					(user) =>
						user.name.toLowerCase().startsWith(action.payload.toLowerCase()) ||
						user.email.toLowerCase().startsWith(action.payload.toLowerCase())
				),
				userTodos: [],
				userPosts: [],
				userID: null,
			}
		case PASS_USER_ID:
			return {
				...state,
				userID: action.payload,
			}

		case UPDATE_USER:
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.payload.id ? { ...action.payload } : user
				),
			}

		case SET_ALERT: {
			return {
				...state,
				setAlert: action.payload,
			}
		}
		case SET_ALERT_MSG: {
			return {
				...state,
				alertMsg: action.payload,
			}
		}
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
				userTodos: [],
				userPosts: [],
				userID: null,
			}

		default:
			return state
	}
}
