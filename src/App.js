import React, { useEffect, useContext } from 'react'
import './App.css'
import AppContext from './context/app/AppContext'
import Users from './components/Users'
import Menubar from './components/Menubar'
import UserPosts from './components/tasks/UserPosts'
import UserTodos from './components/tasks/UserTodos'
import AddUser from './components/AddUser'

const App = () => {
	const context = useContext(AppContext)

	useEffect(() => {
		context.getData('users')
		context.getData('posts')
		context.getData('todos')
		// eslint-disable-next-line
	}, [])

	const renderPage = () => {
		if (context.userID === 'adduser') {
			return <AddUser />
		} else if (context.userID) {
			return (
				<div className="row">
					<UserTodos />
					<UserPosts />
				</div>
			)
		} else {
			return (
				<div>
					<h1>Please Select User to see Todos and posts</h1>
				</div>
			)
		}
	}

	return (
		<div>
			<Menubar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<Users />
					</div>
					<div className="col-md-8 col-sm-12">{renderPage()}</div>
				</div>
			</div>
		</div>
	)
}

export default App
