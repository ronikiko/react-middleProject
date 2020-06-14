import React from 'react'
import TextField from '@material-ui/core/TextField'
import UserFormButtons from './UserFormButtons'

function UserForm({ name, email, user }) {
	return (
		<div>
			<TextField name="name" value={name} label="Name" variant="outlined" />{' '}
			<TextField name="name" value={email} label="Email" variant="outlined" />
			<UserFormButtons user={user} />
		</div>
	)
}

export default UserForm
