import React from 'react'
import Button from '@material-ui/core/Button';

 function UserFormBUttons() {
    return (
        <div style={{marginTop: '7px',width: '100%', display:'flex', justifyContent: 'space-between'}}>
            <Button variant="contained">Other Data</Button>
            <div style={{marginLeft: '15px'}}>
                <Button variant="contained" color="primary">
                    Update
                </Button>
                {" "}
                <Button variant="contained" color="secondary">
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default UserFormBUttons