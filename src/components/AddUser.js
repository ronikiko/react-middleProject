import React, { useContext } from 'react'
import AppContext from '../context/app/AppContext'

function AddUser() {
	const context = useContext(AppContext)

	//const old = usePrevious(prevId)
	const cancel = () => {
		context.userIdPass(null)
	}

	return (
		<div className="card add-user-form">
			<div className="card-body">
				<h5 className="card-title">Add New user</h5>
				<div className="card-text">
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Name:</label>
						<input type="text" className="form-control" name="body" />
						<small className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email:</label>
						<input type="email" className="form-control" name="email" />
						<small className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
				</div>
				<div className="btns">
					<button className="btn btn-success">Add</button>
					<button className="btn btn-primary" onClick={cancel}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddUser
