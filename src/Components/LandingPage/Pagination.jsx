import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Pagination(props) {

    const count =20;
    const [paginations, setpaginations] = useState({
        p1:1,
        p2:2,
        p3:3
    })
    const [subbooks,setsubbooks ] = useState([])
    const pageClick = pNo =>{
        if(pNo===1){
            const temp = {p1:1,p2:2,p3:3}
            setpaginations({...temp})
        }else if(pNo===Math.ceil(props.books.length/count)){
            const temp = {p1:pNo-2,p2:pNo-1,p3:pNo}
            setpaginations({...temp})
        }else{
            const temp = {p1:pNo-1,p2:pNo,p3:pNo+1}
            setpaginations({...temp})
        }
        setsubbooks(props.books.slice((pNo-1)*count,pNo*count))
    }
    
    useEffect(() => {
        pageClick(1)
        // eslint-disable-next-line
    }, [props.books])


    return (
        <div>
            <section className="tiles">
                {subbooks}
            </section>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                    <NavLink className="page-link" to="#" aria-label="Previous" onClick={()=>{pageClick(1)}}>
                        <span aria-hidden="true">First</span>
                    </NavLink>
                    </li>
                    <li className="page-item"><Link className="page-link" to="#" onClick={()=>{pageClick(paginations.p1)}}>{paginations.p1}</Link></li>
                    {props.books.length>count && <li className="page-item"><Link className="page-link" to="#" onClick={()=>{pageClick(paginations.p2)}}>{paginations.p2}</Link></li>}
                    {props.books.length>count*2 && <li className="page-item"><Link className="page-link" to="#" onClick={()=>{pageClick(paginations.p3)}}>{paginations.p3}</Link></li>}
                    {(props.books.length>count*3 && paginations.p3!==Math.ceil(props.books.length/count)) && <li className="page-item"><Link className="page-link" to="#" >...</Link></li>}
                    {(props.books.length>count*3 && paginations.p3!==Math.ceil(props.books.length/count)) && <li className="page-item"><Link className="page-link" to="#" onClick={()=>{pageClick(Math.ceil(props.books.length/count))}}>{Math.ceil(props.books.length/count)}</Link></li>}
                    <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next" onClick={()=>{pageClick(Math.ceil(props.books.length/count))}}>
                        <span aria-hidden="true">Last</span>
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
