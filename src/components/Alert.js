import React, {useContext} from 'react'
import AppContext from '../context/app/AppContext'

 const Alert = () => {
    const context = useContext(AppContext)
    return (
        <div>
            <div className="alert alert-success center-alert" role="alert">
                 {context.alertMsg}
            </div>
        </div>
    )
}

export default Alert