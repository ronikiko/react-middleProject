import { SEARCH_USERS_FILTER, FETCH_ALL_USERS } from './types/appTypes'

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

		default:
			return state
	}
}
