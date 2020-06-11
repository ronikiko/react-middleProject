import React,{useContext, useState } from 'react'
import UserForm from './UserForm'
import AppContext  from '../context/app/AppContext'

 function User({user}) {

    const context = useContext(AppContext)
    const byUserid = context.todos.filter(user => user.userId === user.id)
    const un = byUserid.filter(todo => todo.completed === false)
console.log(byUserid)
    if(un.length > 0 ){
        return (
            <div style={{border:  '1px solid red', padding: '20px', margin: '10px', width: '65%'}}>
               <h3>ID : {user.id}</h3>
               <UserForm name={user.name} email={user.email} />
            </div>
        )
    } else {
        return (
            <div style={{border:  '1px solid green', padding: '20px', margin: '10px', width: '65%'}}>
               <h3>ID : {user.id}</h3>
               <UserForm name={user.name} email={user.email} />
            </div>
        )
    }

   
}

export default User
