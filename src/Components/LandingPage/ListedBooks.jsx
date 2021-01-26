import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {token} from '../../functions/Manage.sessions'
export default function ListedBooks() {

    const [books, setbooks] = useState([])
    const [change, setchange] = useState(true)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/listedbooks`,{
            headers:{
                token
            }
        })
        .then(res=>{
            const temp = [...res.data.books]
            setbooks([...temp])
        })
        .catch()
    }, [change])

    const changeStatus = id =>{
        axios.post(`${process.env.REACT_APP_API}/changestatus`,{id})
            .then(res=>{
                setchange(!change)
            })
            .catch(err=>{
                console.log(err.response.data.error)
            })
    }

    return (
        <ul className="list-group list-group-flush">
            {books.map(book=><li className="list-group-item font-weight-bold text-white d-flex justify-content-between bg-primary my-1"><div>{book.title}</div> <button onClick={()=>{changeStatus(book._id)}} className={`text-white bg-${book.available?'success':'danger'}`} >Change Status</button></li>)}
        </ul>
    )
}
