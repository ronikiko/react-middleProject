import React, { useContext } from 'react'
import UserForm from './UserForm'
import Alert from './Alert'
import AppContext from '../context/app/AppContext'

function User({ user }) {
    const context = useContext(AppContext)
    return (
        <div style={ { border: '1px solid red', padding: '20px', margin: '10px'} }>
            <h3>ID : { user.id }</h3>
            {context.setAlert && <Alert />}
            <UserForm user={user} />
        </div>
    )
}

export default User