import React from 'react'

export default function ContactDetail(props) {
    return (
        <div className='border border-teal p-3'>
            <h2>Contact Information</h2>
            {(props.edit) && <div onClick={props.toggle} style={{cursor:'pointer',marginTop:'-50px', marginLeft:'80%',marginRight:'10px'}}>&#9998;Edit Info</div>}
            <h4>&#x2712; Name : {props.name}</h4>
            <h4>&#9990; Contact Number : {props.contact}</h4>
            <h4>&#9993; Email : <span className='text-lowercase'>{props.email}</span></h4>
        </div>
    )
}
