import React from 'react'

const AddPost = ({ cancel }) => {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Add New Post</h5>
					<p className="card-text">
						Title: <input type="text" name="title" />
						<br />
						Body: <input type="text" name="body" />
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

export default AddPost
