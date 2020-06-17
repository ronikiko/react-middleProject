import React, { useEffect, useContext } from 'react'
import './App.css'
import AppContext from './context/app/AppContext'
import Users from './components/Users'
import Menubar from './components/Menubar'
import UserPosts from './components/tasks/UserPosts'
import UserTodos from './components/tasks/UserTodos'

const App = () => {
	const context = useContext(AppContext)

	useEffect(() => {
		context.getData('users')
		context.getData('posts')
		context.getData('todos')
		// eslint-disabeld-next-line
	}, [])

	return (
		<div>
			<Menubar />
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Users />
					</div>
					<div className="col">
						{context.userID && <UserTodos />}
						{context.userID && <UserPosts />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
