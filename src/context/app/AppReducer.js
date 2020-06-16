import {
	SEARCH_USERS_FILTER,
	FETCH_ALL_USERS,
	UPDATE_USER,
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

		default:
			return state
	}
}
