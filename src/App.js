import React, { useContext, useEffect } from 'react';
import './App.css';
import AppContext  from './context/app/AppContext'
import Users from './components/Users'
import Menubar from './components/Menubar'
import Grid from '@material-ui/core/Grid';
import Container  from '@material-ui/core/Container'

 const App = () =>  {
  const context = useContext(AppContext)

  useEffect(() => {
    context.getData('users')
    context.getData('posts')
    context.getData('todos')
    //eslint-disable-next-line
  }, [])
console.log(context.todos)
    return (
      <div>
      <Menubar />
        <Container>
        <Grid container spacing={3}>
          
          <Grid item md={7}>
            <Users />
          </Grid>
          <Grid item md={5}>
              <h1>Left Side</h1>
          </Grid>
      
        </Grid>
        </Container>
      </div>
    )
}

export default App
