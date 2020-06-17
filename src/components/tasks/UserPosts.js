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
		<div style={{ width: '80%' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h1>User Posts {userID}</h1>
				<button className="btn btn-secondary" onClick={() => setIsadd(true)}>
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
