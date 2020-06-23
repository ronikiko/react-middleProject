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
<<<<<<< HEAD
		<div
			className={user.id === context.userID ? 'user user-orange' : 'user'}
		>
			<h3 onClick={passUserIdToState}>ID : {user.id}</h3>
			{context.setAlert && <Alert />}
			<UserForm user={user} />
=======
		<div className={user.id === context.userID ? color : 'red-border'}>
			<div
				key={user.id}
				className={user.id === context.userID ? 'user user-orange' : 'user'}
			>
				<h3 onClick={passUserIdToState}>ID : {user.id}</h3>
				{context.setAlert && <Alert />}
				<UserForm user={user} />
			</div>
>>>>>>> fb06af183fcfab827a07400bb1cd4eeba5d875ac
		</div>
	)
}

export default User
