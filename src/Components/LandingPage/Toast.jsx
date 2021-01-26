import React, { useEffect } from 'react'

export default function Toast(props) {
    
    let interval;

    useEffect(() => {
        //eslint-disable-next-line
        interval = setTimeout(() => {
            document.querySelector('.alert').classList.remove('alert-danger')
            document.querySelector('.alert').classList.remove('alert-success')
        }, 5000);
    }, [props.class])
    useEffect(() => {    
        return ()=> clearInterval(interval)
    //eslint-disable-next-line
    }, [])

    return (
        <div className={`alert ${props.class} w-25 fixed-top`} role="alert">
            <strong>{props.msg}</strong>
        </div>
    )
}
