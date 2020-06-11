import React,{ useState } from 'react'
import AppContext from './AppContext'
import { getApiDataByType } from '../../api/getDataFromApi'


 const AppStateContext = (props) => {

    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])
    const [posts, setPosts] = useState([])

    const getData = async (dataType) => {
        
        if(dataType === 'users') {
            const users = await getApiDataByType('users')
            setUsers([...users])
        } else if(dataType === 'todos') {
            const todos = await getApiDataByType('todos')
            setTodos([...todos])
        } else if (dataType === 'posts'){
           const posts = await getApiDataByType('posts')
           setPosts([...posts])
        }
    }

    return (
       <AppContext.Provider value={{
           users,
           posts,
           todos,
           getData
       }}>
           {props.children}
       </AppContext.Provider>
    )
}

export default AppStateContext