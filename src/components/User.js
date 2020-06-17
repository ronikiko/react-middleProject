import React, { useContext, useState } from 'react'
import UserForm from './UserForm'
import Alert from './Alert'
import AppContext from '../context/app/AppContext'

function User({ user, color }) {
	const [isOrange, setIsorange] = useState(false)
	const context = useContext(AppContext)

	const passUserIdToState = () => {
		context.userIdPass(user.id)
		context.userTodoById(user.id)
		context.userPostById(user.id)
		setIsorange(true)
	}
	
	return (
		<div className={isOrange ? 'user user-orange' : 'user'}>
			<h3 onClick={passUserIdToState}>ID : {user.id}</h3>
			{context.setAlert && <Alert />}
			<UserForm user={user} />
		</div>
	)
}

export default User
