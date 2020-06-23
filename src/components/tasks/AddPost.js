import React, { useState, useContext } from 'react'
import AppContext from '../../context/app/AppContext'
import Alert from '../Alert'

const AddPost = ({ cancel }) => {

	const context = useContext(AppContext)

	const { userID, userPosts,setAlert, addNewPost, setAlertToDispaly, setAlertMessageToDispaly } = context
	const [post, setPost] = useState({title:'', body: ''})
	const [err, setErr] = useState('')
	const addNewPostFunc = () => {
		// check if the inputs are empty
		if(post.title === '' ) return setErr('Required Fildes')
		else  setErr('')
		
		if(post.body === '' ) return setErr('Required Fildes')
		else  setErr('')
		// set new post object
		const newPost = {
			id: userPosts.length + 1,
			userId: userID,
			title: post.title,
			body: post.body
		}
		// add the new post object to userPosts array
		addNewPost(newPost)

		setAlertToDispaly(true)
		setAlertMessageToDispaly('Post added successfully!')
		setErr('')
		setPost({title:'', body: ''})
		setTimeout(() => {
			setAlertToDispaly(false)
			setAlertMessageToDispaly('')
		}, 3000)
	}
	return (
		<div>
			<div className="card add-form">
			{setAlert && <Alert />}
			{err}
				<div className="card-body">
					<h5 className="card-title">Add New Post</h5>
					<div className="card-text">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Title</label>
							<input 
								type="text" 
								className={err ? 'form-control is-invalid' : 'form-control'} 
								name="title" 
								value={post.title} 
								onChange={(e) => setPost({...post, title: e.target.value})}
								/>
							<small className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>

						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Body</label>
							<input 
								type="text" 
								className={err ? 'form-control is-invalid' : 'form-control'}  
								name="body" 
								value={post.body}
								onChange={(e) => setPost({...post, body: e.target.value})}
								 />
							<small className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
					</div>
					<div className="btns">
						<button className="btn btn-success" onClick={addNewPostFunc}>Add</button>
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
