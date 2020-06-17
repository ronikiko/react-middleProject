import React, { useContext } from 'react'
import AppContext from '../../context/app/AppContext'

const UserTodo = ({ todo }) => {
	const context = useContext(AppContext)
	const markAsCompleted = () => {
		const com = {
			...todo,
			completed: true,
		}
		context.markAsCompletedState(com)
	}

	return (
		<div className="card mb-2" key={todo.id}>
			<div className="card-body">
				<h5 className="card-title">Title: {todo.title}</h5>
				<p className="card-text">Completed: {todo.completed.toString()}</p>
				{todo.completed ? (
					''
				) : (
					<button onClick={markAsCompleted} className="btn btn-primary">
						Mark as completed
					</button>
				)}
			</div>
		</div>
	)
}

export default UserTodo
