import React from 'react'
import Button from '@material-ui/core/Button'
import Card from './Card'

function UserFormBUttons() {
	const [over, setOver] = React.useState('false')

	const onOver = () => {
		console.log(over)
		setOver(true)
	}

	const onMouseLeave = () => {
		setOver(false)
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
					onMouseOver={onOver}
					onMouseLeave={onMouseLeave}
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
			<div className="onOver">
				<Card over={over} />
			</div>
		</div>
	)
}

export default UserFormBUttons
