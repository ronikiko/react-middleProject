import React, { useContext} from 'react'
import AppContext from '../context/app/AppContext'

function AddUser() {
	const context = useContext(AppContext)
	
	//const old = usePrevious(prevId)
	const cancel = () => {
		
			context.userIdPass(1)
		
		
	}

    return (
        <div className="card">
				<div className="card-body">
					<h5 className="card-title">Add New user</h5>
					<p className="card-text">
						name: <input type="text" name="name" />
						<br />
						Email: <input type="email" name="email" />
					</p>
					<button className="btn btn-success">Add</button>
					<button className="btn btn-primary" onClick={cancel}>
						Cancel
					</button>
				</div>
			</div>
    )
}

export default AddUser
