import React, { useContext, useState, useEffect } from 'react'
import AppContext from '../context/app/AppContext'
import User from './User'

function Users() {
	const [borderColor, setBorderColor] = useState('red-border')
	const context = useContext(AppContext)
	const { users, filterd, userTodos } = context

	useEffect(() => {
		if (userTodos !== 'undefined') {
			if (userTodos.some((to) => to.completed === false)) {
				setBorderColor('red-border')
			} else {
				setBorderColor('green-border')
			}
		} else {
			setBorderColor('red-border')
		}
		// eslint-disable-next-line
	}, [context.userTodos])

	if (filterd.length > 0) {
		return (
			<div>
				{filterd.map((user) => (
					<User key={user.id} user={user} color={borderColor} />
				))}
			</div>
		)
	} else if (users.length > 0) {
		return (
			<div>
				{users.map((user) => (
					<User key={user.id} user={user} color={borderColor} />
				))}
			</div>
		)
	} else {
		return <h1>There is No Users To Display!!!</h1>
	}
}

export default Users
