import React from 'react'

class UserForm extends React.Component {
	state = {
		name: this.props.user.name,
		email: this.props.user.email,
		address: {
			city: this.props.user.address.city,
			street: this.props.user.address.street,
			zipcode: this.props.user.address.zipcode
		},
		isShow: false
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value })
	}
	showData = () => {
		this.setState({isShow: true})
	}
	
	closeData = (e) => {
		e.stopPropagation()
		this.setState({isShow: false})
	}
	render(){
		const { name, email, address, isShow } = this.state
		return (

				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						
						<div className="card-text">
							<form>
							<div className="form-group">
 								<label htmlFor="name">Name</label>
								<input onChange={this.onChange} className="form-control" type="text"  name="name" value={name} />{' '}
							</div>
							<div className="form-group">
 								<label htmlFor="email">Email</label>
								<input  onChange={this.onChange}  className="form-control" type="text" name="email" value={email} />
							</div>
							<div className="btn-group">
								<button className="btn btn-secondary" onMouseOver={this.showData}>Other Data</button>
								<button className="btn btn-primary">Update</button>
								<button className="btn btn-danger">Delete</button>
							</div>
								<div onClick={this.closeData} className={isShow ? 'moreData show' : 'moreData hide'}>
								<h3>More Data</h3>
								<div className="form-group">
									<label htmlFor="city">City</label>
									<input onChange={this.onChange}  className="form-control" type="text"  name="city" value={address.city} />{' '}
								</div>
								<div className="form-group">
									<label htmlFor="street">Street</label>
									<input onChange={this.onChange}  className="form-control" type="text" name="street" value={address.street} />
								</div>
								<div className="form-group">
									<label htmlFor="zipcode">Zipcode</label>
									<input onChange={this.onChange}  className="form-control" type="text" name="zipcode" value={address.zipcode} />
								</div>
								</div>
							</form>
						</div>
						
					</div>
				</div>	
		)
	}
}

export default UserForm
