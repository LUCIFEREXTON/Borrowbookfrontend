import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ContactDetail from './ContactDetail'
import { isAuth, token, login } from '../../functions/Manage.sessions'
import Editinfo from './Editinfo'
import Toast from './Toast'
import ListedBooks from './ListedBooks'

export default function Profile() {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        contact:'',
        location:''
    })

    useEffect(() => {
        setFormData({name:isAuth().name,email:isAuth().email,contact:isAuth().contact,location:isAuth().location})
        setupdateform({name:isAuth().name,contact:isAuth().contact})
    }, [])

    const [display, setDisplay] = useState('none')
    const toggle = () =>{
        const disp = display==='none'?'flex':'none';
        setDisplay(disp)
        setupdateform({name:isAuth().name,contact:isAuth().contact})
    }

    const [toast, settoast] = useState({
        msg:'',
        class:''
    })

    const [updateform, setupdateform] = useState({
        name:'',
        contact:''
    })
    const update = () =>{
        if(updateform.contact.length>=10 && updateform.name){
            axios.post(`${process.env.REACT_APP_API}/updatedetails`,{...updateform},{
                headers:{
                    token
                }
            })
            .then(res=>{
                login(()=>{
                    const temp = {msg:'Updated',class:'alert-success'}
                    settoast({...temp})
                    setTimeout(() => {
                        settoast({msg:'',class:''})
                        setFormData({name:isAuth().name,email:isAuth().email,contact:isAuth().contact,location:isAuth().location})
                    }, 2000);
                },res)
            })
            .catch(err=>{
                setupdateform({name:isAuth().name,contact:isAuth().contact})
                const temp = {msg:err.response.data.error,class:'alert-danger'}
                settoast({...temp})
                setTimeout(() => {
                    settoast({msg:'',class:''})
                }, 5000);
            })
        } else {
            const temp = {msg:'Check Details CarefullY',class:'alert-danger'}
            settoast({...temp})
            setTimeout(() => {
                settoast({msg:'',class:''})
            }, 5000);
        }
    }    

    return (
        <div className="container">
            <h1>RISHU</h1>
            <Toast msg={toast.msg} class={toast.class} />
            <Editinfo display={display} toggle={toggle}>
                <h2>Contact Information</h2>
                <h4>&#x2712; Name : </h4> <input type="text" name="name" id="name" value={updateform.name} autoComplete='off' onChange={e=>{setupdateform({...updateform,name:e.target.value})}} />
                <h4>&#9990; Contact Number :</h4> <input type="tel" name="contact" id="contact" value={updateform.contact} autoComplete='off' onChange={e=>{setupdateform({...updateform,contact:e.target.value})}} />
                <button type="submit" onClick={update}>UPDATE</button>
            </Editinfo>
            <ContactDetail edit={true} name={formData.name} email={formData.email} contact={formData.contact} toggle={toggle}/>
            <div className="container-fluid ">
                <div className="container-fluid wrap text-break mx-auto text-center w-md-75 bg-light">
                    <h2 className=' display-4'>Listed Books</h2>
                    <button className=' text-white bg-primary my-3' ><Link to='/listbook' className='text-white'>List Book</Link></button>
                    <ListedBooks/>
                </div>
            </div>
        </div>
    )
}
