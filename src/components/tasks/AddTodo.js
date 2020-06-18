import React from 'react'

const AddTodo = ({ cancel }) => {
	return (
		<div>
			<div className="card add-form">
				<div className="card-body">
					<h5 className="card-title">Add New Todo</h5>
					<div className="card-text">
						<div class="form-group">
							<label for="exampleInputEmail1">Title</label>
							<input type="text" class="form-control" name="title" />
							<small id="emailHelp" class="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
					</div>
					<div className="btns">
						<button className="btn btn-success">Add</button>
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
