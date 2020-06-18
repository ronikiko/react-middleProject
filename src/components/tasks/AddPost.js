import React from 'react'

const AddPost = ({ cancel }) => {
	return (
		<div>
			<div className="card add-form">
				<div className="card-body">
					<h5 className="card-title">Add New Post</h5>
					<div className="card-text">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Title</label>
							<input type="text" className="form-control" name="title" />
							<small className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>

						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Body</label>
							<input type="text" className="form-control" name="body" />
							<small className="form-text text-muted">
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

export default AddPost
