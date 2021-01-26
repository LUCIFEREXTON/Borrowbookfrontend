import React from 'react'

export default function Contactinput(props) {
    return (
        <div className="field half">
            <input type="text" name={props.name} id={props.name} placeholder={props.placeholder} />
        </div>
    )
}
