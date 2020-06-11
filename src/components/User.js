import React from 'react'
import UserForm from './UserForm'

 function User({user}) {
    return (
        <div>
           <h3>ID : {user.id}</h3>
           <UserForm name={user.name} email={user.email} />
        </div>
    )
}

export default User
