import React, { useContext } from 'react'
import AppContext from '../context/app/AppContext'

const UserForm = ({ user }) => {
	const context = useContext(AppContext)

	const [isShow, setisShow] = React.useState(false)
	const [form, setForm] = React.useState({
		name: user.name,
		email: user.email,
		city: user.address.city,
		street: user.address.street,
		zipcode: user.address.zipcode,
	})

	const showData = () => {
		setisShow(true)
	}

	const closeData = (e) => {
		e.stopPropagation()
		setisShow(false)
	}

	const updateUserFun = (e) => {
		e.preventDefault()
		const newUser = {
			...user,
			name: form.name,
			email: form.email,
			address: {
				city: form.city,
				street: form.street,
				zipcode: form.zipcode,
			},
		}
		console.log(newUser)
		context.updateUser(newUser)
	}

	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Card title</h5>

				<div className="card-text">
					<form>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								onChange={(e) => setForm({ ...form, name: e.target.value })}
								className="form-control"
								type="text"
								name="name"
								value={form.name}
							/>{' '}
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								className="form-control"
								type="text"
								name="email"
								value={form.email}
							/>
						</div>
						<div className="btn-group">
							<button className="btn btn-secondary" onMouseOver={showData}>
								Other Data
							</button>
							<button className="btn btn-primary" onClick={updateUserFun}>
								Update
							</button>
							<button className="btn btn-danger">Delete</button>
						</div>
						<div
							onClick={closeData}
							className={isShow ? 'moreData show' : 'moreData hide'}
						>
							<h3>More Data</h3>
							<div className="form-group">
								<label htmlFor="city">City</label>
								<input
									onChange={(e) =>
										setForm({
											...form,
											city: e.target.value,
										})
									}
									className="form-control"
									type="text"
									name="city"
									value={form.city}
								/>{' '}
							</div>
							<div className="form-group">
								<label htmlFor="street">Street</label>
								<input
									onChange={(e) =>
										setForm({
											...form,
											street: e.target.value,
										})
									}
									className="form-control"
									type="text"
									name="street"
									value={form.street}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="zipcode">Zipcode</label>
								<input
									onChange={(e) =>
										setForm({
											...form,
											zipcode: e.target.value,
										})
									}
									className="form-control"
									type="text"
									name="zipcode"
									value={form.zipcode}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UserForm
