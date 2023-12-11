import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show position-absolute w-100`} role="alert">
            <strong>{props.alert.msg}</strong>
        </div>



    )
}

export default Alert
