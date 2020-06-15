import React from 'react'
import UserForm from './UserForm'

function User({ user }) {

    return (
        <div style={ { border: '1px solid red', padding: '20px', margin: '10px'} }>
            <h3>ID : { user.id }</h3>
            <UserForm user={user} />
        </div>
    )
}

export default User