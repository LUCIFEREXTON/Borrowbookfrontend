import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { login } from '../../functions/Manage.sessions'
import Footer from './Footer'
import axios from 'axios'
import Toast from './Toast'

export default function Login() {

    let history = useHistory()
    const [formData, setFormData] = useState({
        email:'something@gmail.com',
        password:'asdf1234'
    })
    const [toast, settoast] = useState({
        msg:'',
        class:''
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    const loginhandler = () =>{

        axios.post(`${process.env.REACT_APP_API}/login`,{...formData})
            .then(res=>{
                login(()=>{
                    history.push('/profile')
                },res)
            })
            .catch(err=>{
                console.log('err',JSON.stringify(err, null, '\t'))
                // alert('Check Console')
                settoast({msg:err.response.data.error,class:'alert-danger'})
                setTimeout(() => {
                    settoast({msg:'',class:''})
                }, 5000);
            })
    }
    return (
        <React.Fragment>
            <header id="header">
                <div className="inner text-center">
                        <Link to="/" className="logo">
                            <span className="fa fa-book"></span> <span className="title">Kitabi Keeda</span>
                        </Link>
                </div>
            </header>
            <Toast msg={toast.msg} class={toast.class} />
           <div id="wrapper">
                <div className="container mt-5">
                    <div className="container w-50 text-center">
                        <form className="form-signin">
                            <h1 className="h3 mb-3 font-weight-normal">Please Login in</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" value={formData.email} onChange={(event)=>{setFormData({...formData,email:event.target.value})}} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" value={formData.password} onChange={(event)=>{setFormData({...formData,password:event.target.value})}} className="form-control" placeholder="Password" required />
                            <button className="btn btn-lg btn-primary btn-block" onClick={loginhandler} type="submit">Log in</button>
                            <p className="mt-5 mb-3 text-muted">&copy; 2020-2022</p>
                        </form>
                    </div>
                </div>
                <Footer />
			</div>  
        </React.Fragment>    
    )
}