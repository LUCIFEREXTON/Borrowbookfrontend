import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {isAuth, logout, location as address, setlocation as setaddress} from '../../functions/Manage.sessions'
import Editinfo from './Editinfo'

export default function Header() {

    const [auth, setauth] = useState(false)
    const [name, setname] = useState('')
    const logouthandle = () =>{
        logout(()=>{
            setauth(isAuth())
            setname('')
        })
    }

    useEffect(() => {
        address()
        if(isAuth()){
            setauth(true)
            setname(isAuth().name)
        }
    }, [])
    useEffect(() => {
        if(isAuth()){
            setauth(true)
            setname(isAuth().name)
        }else{
            setauth(false)
            setname('')
        }        
    }, [auth,name])

    const [location, setlocation] = useState(address())
    const [display, setDisplay] = useState('none')
    const toggle = () =>{
        const disp = display==='none'?'flex':'none';
        setDisplay(disp)
    }
    const editadd = () =>{
        setaddress(location)
        toggle()
    }
    return (
        <header id="header">
            <div className="inner">
                    <Link to="/" className="logo">
                        <span className="fa fa-book"></span> <span className="title">Kitabi Keeda</span>
                    </Link>
                    <Editinfo display={display} toggle={toggle}>
                        <h4>&#8449;<input type="text" name="address" value={location} onChange={e=>{setlocation(e.target.value)}} id="address"/> </h4>
                        <button onClick={editadd}>Confirm</button>
                    </Editinfo>
                    <nav>
                        <ul>
                            <div>{isAuth() && <Link to='/profile'><li className='font-weight-bold bg-white'>{name}</li></Link>}
                            <li className='font-weight-bold badge badge-primary' onClick={toggle}>{address()}</li></div>
                            {!isAuth() && <li><Link to='/signin' className='text-white font-weight-bold ml-2 bg-success'>Sign Up</Link></li>}
                            {!isAuth() && <li><Link to='/login' className='text-white font-weight-bold ml-2 bg-success'>Login</Link></li>}
                            {isAuth() && <li><Link to={window.location.pathname} className='text-white font-weight-bold ml-2 bg-danger' onClick={logouthandle}>Sign Out</Link></li>}
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}
