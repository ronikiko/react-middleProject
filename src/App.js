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
		// eslint-disabeld-next-line
	}, [])

	const renderPage = () => {
		if(context.userID === 'adduser'){
			return <AddUser />
		} else if(context.userID){
			return (
				<div>
					 <UserTodos />
					 <UserPosts />
				</div>
			)
		}
		else {
			return <div></div>
		}
	}

	
	return (
		<div>
			<Menubar />
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Users />
					</div>
					<div className="col">
					{renderPage()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
