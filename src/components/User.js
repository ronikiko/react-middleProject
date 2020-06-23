import React, { useContext } from 'react'
import UserForm from './UserForm'
import Alert from './Alert'
import AppContext from '../context/app/AppContext'

function User({ user, color }) {
	const context = useContext(AppContext)

	const passUserIdToState = () => {
		context.userIdPass(user.id)
		// call the function from the context
		context.userTodoById(user.id)
		context.userPostById(user.id)
	}

	return (
		<div
			className={user.id === context.userID ? 'user user-orange' : 'user'}
		>
			<h3 onClick={passUserIdToState}>ID : {user.id}</h3>
			{context.setAlert && <Alert />}
			<UserForm user={user} />
		</div>
	)
}

export default User
