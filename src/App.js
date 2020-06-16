import React, { useEffect, useContext } from 'react'
import './App.css'
import AppContext from './context/app/AppContext'
import Users from './components/Users'
import Menubar from './components/Menubar'

const App = () => {
	const context = useContext(AppContext)

	useEffect(() => {
		context.getData('users')
		// eslint-disabeld-next-line
	}, [])

	return (
		<div>
			<Menubar />
			<div className="container">
				<div className="row">
					<div className="col">
						<Users />
					</div>
					<div className="col">left Side</div>
				</div>
			</div>
		</div>
	)
}

export default App
