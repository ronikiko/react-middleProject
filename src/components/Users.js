import React, { useContext } from 'react'
import AppContext from '../context/app/AppContext'
import User from './User'

function Users() {
    const context = useContext(AppContext)
    const { users, filterd } = context
    
    if (filterd.length > 0) {
        return (
            <div>
                { filterd.map(user => <User key={ user.id } user={ user } />) }
            </div>
        )
    }
    else if (users.length > 0) {
        return (
            <div>
                { users.map(user => <User key={ user.id } user={ user } />) }
            </div>
        )

    } else {
        return <h1>There is No Users To Display!!!</h1>
    }
}

export default Users