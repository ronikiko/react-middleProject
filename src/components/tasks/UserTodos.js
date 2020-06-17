import React, { useContext, useState } from 'react'
import AppContetx from '../../context/app/AppContext'
import UserTodo from './UserTodo'
import AddTodo from './AddTodo'

const UserTodos = () => {
	const [isAdd, setIsadd] = useState(false)

	const context = useContext(AppContetx)
	const { userID, userTodos } = context
	const cancel = () => {
		setIsadd(false)
	}
	return (
		<div style={{ width: '80%' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h1>Todos user: {userID}</h1>
				<button className="btn btn-secondary" onClick={() => setIsadd(true)}>
					Add Todo
				</button>
			</div>
			{isAdd ? (
				<AddTodo cancel={() => cancel()} />
			) : (
				<div>
					{userTodos.map((todo) => (
						<UserTodo key={todo.id} todo={todo} />
					))}
				</div>
			)}
		</div>
	)
}

export default UserTodos
