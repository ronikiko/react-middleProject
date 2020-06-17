import React from 'react'

function UserPost({ post: { title, body } }) {
	return (
		<div>
			<div className="card mb-4">
				<div className="card-body">
					<h5 className="card-title">Title: {title}</h5>
					<h5>Body</h5>
					<p className="card-text">{body}</p>
				</div>
			</div>
		</div>
	)
}

export default UserPost
