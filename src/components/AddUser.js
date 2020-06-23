import React, { useContext, useState } from 'react'
import AppContext from '../context/app/AppContext'

function AddUser() {
	const context = useContext(AppContext)

	const { addNewUser, users, setAlert, setAlertToDispaly, setAlertMessageToDispaly } = context

	const [user, setUser] = useState({ name: '', email: ''})
	const [err, setErr] = useState('')
	//const old = usePrevious(prevId)
	const cancel = () => {
		context.userIdPass(null)
	}

	const onAddNewUser = () => {

		// check if the inputs are empty
		if(user.name === '' ) return setErr('Required Fildes')
		else  setErr('')
		
		if(user.email === '' ) return setErr('Required Fildes')
		else  setErr('')


		const newUser = {
			id: users.length + 1,
			name: user.name,
			email: user.email,
			address:{},
			username:'',
			phone: '',
			website: '',
			company: {}
		}
		addNewUser(newUser)
		setAlertToDispaly(true)
		setAlertMessageToDispaly('New user add!')
		setUser({name:'', email:''})

		setTimeout(() => {
			setAlertToDispaly(false)
			setAlertMessageToDispaly('')
		}, 3000)
	}
	return (
		<div className="card add-user-form">
			<div className="card-body">
				<h5 className="card-title">Add New user</h5>
				<div className="card-text">
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Name:</label>
						<input 
							type="text" 
							className={err ? 'form-control is-invalid' : 'form-control'}  
							name="name" 
							onChange={(e) => setUser({...user, name: e.target.value})}
							/>
						<small className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email:</label>
						<input 
							type="email" 
							className={err ? 'form-control is-invalid' : 'form-control'}  
							name="email" 
							onChange={(e) => setUser({...user, email: e.target.value})}
							/>
						<small className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
				</div>
				<div className="btns">
					<button className="btn btn-success" onClick={onAddNewUser}>Add</button>
					<button className="btn btn-primary" onClick={cancel}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddUser
