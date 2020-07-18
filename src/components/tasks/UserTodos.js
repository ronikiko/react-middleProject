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
			<div className="alert alert-secondary" role="alert">
				Todos user: {userID}
				<button
					style={{ position: 'relative', top: '-8px' }}
					className="btn btn-secondary float-right"
					onClick={() => setIsadd(true)}
				>
					Add Todo
				</button>
			</div>

			{isAdd ? (
				// this is the add todo form
				// is display when the the button add is press in the ui
				// and replace the state to true.
				<AddTodo cancel={() => cancel()} />
			) : (
				<div>
					{userTodos.map((todo) => (
						<UserTodo todo={todo} key={todo.id} />
					))}
					{/* {userTodos.map((todo) => (
						<UserTodo todo={todo} key={todo.id} />
					))} */}
				</div>
			)}
		</div>
	)
}

export default UserTodos
