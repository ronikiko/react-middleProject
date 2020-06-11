import React, { useContext} from 'react'
import AppContext  from '../context/app/AppContext'
import User from './User'

 function Users() {
    const context = useContext(AppContext)
    return (
        <div>
            {context.users.map(user => <User user={user} />)}
        </div>
    )
}

export default Users