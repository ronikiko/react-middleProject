import React, { useContext, useState } from 'react'
import AppContext from '../../context/app/AppContext'
import UserPost from './UserPost'
import AddPost from './AddPost'

function UserPosts() {
	const [isAdd, setIsadd] = useState(false)

	const context = useContext(AppContext)
	const { userPosts, userID } = context

	const cancel = () => {
		setIsadd(false)
	}
	return (
		<div style={{ width: '80%', marginTop: '20px' }}>
			<div className="alert alert-secondary" role="alert">
				User Posts {userID}
				<button
					style={{ position: 'relative', top: '-8px' }}
					className="btn btn-secondary float-right"
					onClick={() => setIsadd(true)}
				>
					Add Post
				</button>
			</div>

			{isAdd ? (
				<AddPost cancel={() => cancel()} />
			) : (
				<div>
					{userPosts.map((post) => (
						<UserPost key={post.id} post={post} />
					))}
				</div>
			)}
		</div>
	)
}

export default UserPosts
