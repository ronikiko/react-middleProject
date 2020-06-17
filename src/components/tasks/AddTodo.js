import React from 'react'

const AddTodo = ({ cancel }) => {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Add New Todo</h5>
					<p className="card-text">
						Title: <input type="text" name="title" />
					</p>
					<button className="btn btn-success">Add</button>
					<button className="btn btn-primary" onClick={() => cancel()}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddTodo
