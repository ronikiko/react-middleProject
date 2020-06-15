import React from 'react';
import './App.css';
import AppContext from './context/app/AppContext'
import Users from './components/Users'
import Menubar from './components/Menubar'


class App extends React.Component{

    static contextType = AppContext
    
    componentDidMount() {
        const context = this.context
        context.getData()
      }

    render(){
        
        return (
            <div>
                <Menubar />
                <div className="container">
                    <div className="row">
                        <div className="col">
                                <Users />
                        </div>
                        <div className="col">
                            left Side
                        </div>
                    </div>    
                </div>        
            </div> 
        )
    }
}

export default App
