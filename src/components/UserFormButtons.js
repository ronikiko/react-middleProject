import React from 'react'
import Button from '@material-ui/core/Button'
import CardForm from './CardForm'


function UserFormBUttons({user}) {
const [open, setOpen] = React.useState(false)
	
	const openData = () => {
		setOpen(true)
	}

	const closeData = () => {
		setOpen(false)
	}
	return (
		<div>
			<div
				style={{
					marginTop: '7px',
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Button
					onMouseOver={openData}
					variant="contained"
				>
					Other Data
				</Button>

				<div style={{ marginLeft: '15px' }}>
					<Button variant="contained" color="primary">
						Update
					</Button>{' '}
					<Button variant="contained" color="secondary">
						Delete
					</Button>
				</div>
			</div>

			<div>
				<CardForm user={user} open={open} closeData={closeData} />
			</div>
		</div>
	)
}

export default UserFormBUttons
