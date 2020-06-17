import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppContext from '../context/app/AppContext'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: 80,
	},

	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '20ch',
			'&:focus': {
				width: '30ch',
			},
		},
	},
}))

const Menubar = () => {
	const classes = useStyles()
	const context = useContext(AppContext)

	const searchUsers = async (e) => {
		context.searchUser(e.target.value)
	}
	const passUserIdToState = () => {
		context.userIdPass('adduser')
	}
	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						RK-app
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							//  value={ s }
							type="text"
							placeholder="Search for user..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							onChange={searchUsers}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div>
						<MenuItem>
							<IconButton
								onClick={passUserIdToState}
								aria-haspopup="true"
								edge="end"
								aria-label="account of current user"
								//aria-controls={menuId}
								aria-haspopup="true"
								aria-controls="menu-appbar"
								//onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</MenuItem>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Menubar
