import React from 'react'

export default function Search(props) {

    const clickHandler = (event) =>{
        props.search(event.target.value)
    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={clickHandler} placeholder="Search Book Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
        </div>
    )
}
