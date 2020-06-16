import {
	SEARCH_USERS_FILTER,
	FETCH_ALL_USERS,
	UPDATE_USER,
	SET_ALERT,
	DELETE_USER,
	SET_ALERT_MSG
} from './types/appTypes'

export default (state, action) => {
	switch (action.type) {
		case FETCH_ALL_USERS:
			return {
				...state,
				users: action.payload,
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
					setAlert: action.payload
				}
			}
			case SET_ALERT_MSG: {
				return {
					...state,
					alertMsg: action.payload
				}
			}
			case DELETE_USER: 
				return {
					...state,
					users: state.users.filter(user => user.id !== action.payload)
				}

		default:
			return state
	}
}
