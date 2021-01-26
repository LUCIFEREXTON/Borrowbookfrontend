import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import Toast from './Toast'
import { login } from '../../functions/Manage.sessions'
export default function SignIn() {

    const [formData, setFormData] = useState({
        name:'Rishu',
        email:'something@gmail.com',
        password:'asdf1234',
        contact:'0987657898'
    })
    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const [toast, settoast] = useState({
        msg:'',
        class:''
    })

    const signinhandler = () =>{

        if(formData.name&&formData.email&&formData.password&&formData.contact){
            axios.post(`${process.env.REACT_APP_API}/signup`,{...formData})
            .then(res=>{
                login(()=>{
                    history.replace('/profile')
                },res)
            })
            .catch(err=>{
                const temp = {msg:err.response.data.error,class:'alert-danger'}
                settoast({...temp})
                setTimeout(() => {
                    settoast({msg:'',class:''})
                }, 5000);
            })
        } else{
            const temp = {msg:'Fill all the Information',class:'alert-danger'}
            settoast({...temp})
            setTimeout(() => {
                settoast({msg:'',class:''})
            }, 5000);
        }
    }


    return (
        <React.Fragment>
            <header id="header">
                <div className="inner text-center">
                    <Link to="/" className="logo">
                        <span className="fa fa-book"></span> <span className="title">KITABI KEEDA</span>
                    </Link>
                </div>
            </header>
            <Toast msg={toast.msg} class={toast.class} />
            <div id="wrapper">
                <div className="container mt-5">
                    <div className="container w-50 text-center">
                        <form className="form-signin">
                            <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
                            <label htmlFor="inputName" className="sr-only">Name</label>
                            <input type="text" value={formData.name} onChange={(event)=>{setFormData({...formData,name:event.target.value})}} id="inputName" className="form-control" placeholder="Name" required autoFocus autoComplete='off' />
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email"value={formData.email} onChange={(event)=>{setFormData({...formData,email:event.target.value})}} id="inputEmail" className="form-control" placeholder="Email address" required autoComplete='off' />
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password"value={formData.password} onChange={(event)=>{setFormData({...formData,password:event.target.value})}} id="inputPassword" className="form-control" placeholder="Password" required autoComplete='off' />
                            <label htmlFor="inputContact" className="sr-only">Contact</label>
                            <input type="text"value={formData.contact} onChange={(event)=>{setFormData({...formData,contact:event.target.value})}} id="inputContact" className="form-control" placeholder="Enter Your Contact Number" required autoComplete='off' />
                            <button className="btn btn-lg btn-primary btn-block" onClick={signinhandler} type="submit">Sign in</button>
                        </form>
                        <p className="mt-5 mb-3 text-muted">&copy; 2020-2022</p>
                    </div>
                </div>
                <Footer />  
            </div>
        </React.Fragment>
    )
}
