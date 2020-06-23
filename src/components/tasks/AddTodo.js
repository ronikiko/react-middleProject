import React, { useState, useContext} from 'react'
import AppContext from '../../context/app/AppContext'
import Alert from '../Alert'

const AddTodo = ({ cancel }) => {

	const context = useContext(AppContext)

	const { addNewTodo, userTodos, setAlert, userID, setAlertMessageToDispaly, setAlertToDispaly } = context

	const [title, setTitle] = useState('')
	const [err, setErr] = useState('')

	const onAddClick = () => {
		// check if the filed is empty
		if(title === ''){
			return setErr('Cant be empty')
		}
		
		// creating new obj to store in userTodos array
		const newTodo = {
			userId: userID,
			title,
			id:userTodos.length +1,
			completed: false
		}
		addNewTodo(newTodo)
		setErr('')
		// seting ther SETALERT to true
		setAlertToDispaly(true)
		// seting the msg that displaying in the alert
		setAlertMessageToDispaly("Add new todo :)")
		setTitle('')
		setTimeout(() => {
			setAlertToDispaly(false)
			setAlertMessageToDispaly('')
		}, 3000)

	}
	return (
		<div>
			{setAlert && <Alert />}
			<div className="card add-form">
				{err}
				<div className="card-body">
					<h5 className="card-title">Add New Todo</h5>
					<div className="card-text">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Title</label>
							<input 
								type="text" 
								value={title} 
								className="form-control" 
								name="title" 
								onChange={(e)=> setTitle(e.target.value)} 
								/>

							<small id="emailHelp" className="form-text text-muted">
								Add new AddTodo
							</small>
						</div>
					</div>
					<div className="btns">
						<button className="btn btn-success" onClick={onAddClick}>Add</button>
						<button className="btn btn-primary" onClick={() => cancel()}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddTodo
