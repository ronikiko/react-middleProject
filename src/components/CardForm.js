import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles({
	root: {
		minWidth: 295,
		
	},
	title: {
		fontSize: 20,
	},
	pos: {
		marginBottom: 12,
	},
})

function CardForm({ user, open,closeData }) {

const classes = useStyles()

const closeOpen = () => {
	closeData()
}

	return (
			<Card className={open ? 'show' : 'hide'}>
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						More Info
					</Typography>
					
					<div onClick={closeOpen}>
					<form>
						<TextField 
							className={clsx(classes.margin, classes.textField,classes.pos)}
							InputProps={{
							startAdornment: <InputAdornment position="start">Street</InputAdornment>,
							}}
							value={user.address.street}
							name="street" 
							label="Street" 
							variant="outlined" 
						 />{' '} 
						<TextField  
							className={clsx(classes.margin, classes.textField,classes.pos)}
							InputProps={{
							startAdornment: <InputAdornment position="start">City</InputAdornment>,
							}}
							name="city"
							value={user.address.city}
							label="City" 
							variant="outlined" 
						   />{' '}
						<TextField 
							className={clsx(classes.margin, classes.textField,classes.pos)}
							InputProps={{
							startAdornment: <InputAdornment position="start">Zip Code</InputAdornment>,
							}}
							value={user.address.zipcode}
							name="zipcode"  
							label="Zip Code" 
							variant="outlined" />{' '}
					</form>
					</div>
				</CardContent>
				
			</Card>
	
	)
}

export default CardForm
