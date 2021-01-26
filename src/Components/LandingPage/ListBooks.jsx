import React, {useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'
import S3FileUpload from 'react-s3'
import Toast from './Toast'
import {token} from '../../functions/Manage.sessions'
export default function ListBooks() {
    
    const config = {
        bucketName: 'kitabikeeda',
        region: 'us-east-2',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECERT_ACCESS_KEY,
    }

    
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    const [formData, setformData] = useState({
        title:'',
        isbn:'',
        pageCount:0,
        date:'',
        thumbnailUrl:'',
        shortDescription:'',
        longDescription:'',
        authors:'',
        categories:'',
        available:true
    })
    const [file, setfile] = useState(null)

    const [toast, settoast] = useState({
        msg:'',
        class:''
    })

    useEffect(() => {
        if(formData.thumbnailUrl!==''){

            axios.post(`${process.env.REACT_APP_API}/addbook`, {...formData},{
                headers:{
                    token
                }
            })
            .then(response => {
                console.log(response)
                setformData({
                    title:'',
                    isbn:'',
                    pageCount:0,
                    date:'',
                    thumbnailUrl:'',
                    shortDescription:'',
                    authors:'',
                    categories:'',
                })
                setfile(null)
                settoast({msg:'Book Added',class:'alert-success'})
            })
            .catch(error => console.log(JSON.stringify(error, null, '\t')))
        }
    // eslint-disable-next-line
    }, [formData.thumbnailUrl])

    const handleChange = e => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };
    const filehandleChange = e => {
        setfile(e.target.files[0]);
        settoast({msg:'File Loaded',class:'alert-success'})
    };

    const upload = () => {
        if (file && formData.title && formData.isbn && formData.pageCount && formData.authors && formData.categories && formData.date) {
            S3FileUpload.uploadFile(file, config)
                        .then(data => {
                            console.log(data.location)
                            const link = data.location
                            setformData({...formData, thumbnailUrl:link})
                            settoast({msg:'File Uploaded',class:'alert-success'})
                        })
                        .catch(err => console.error(err))
        }
        else{
            settoast({msg:'Fill All required fields',class:'alert-danger'})
        }
    };



    return (
        <div>
            <Toast msg={toast.msg} class={toast.class} />
            <div className='text-center my-5 w-25 mx-auto'>
                Title:<input type="text" name="title" value={formData.title} onChange={handleChange} autoComplete='off' autoFocus required />
                ISBN:<input type="number" name="isbn" value={formData.isbn} onChange={handleChange} autoComplete='off' required />
                Page Count:<input type="number" name="pageCount"  value={formData.pageCount} onChange={handleChange} autoComplete='off' />
                Published Date:<input type="date" name="date" value={formData.date} onChange={handleChange} autoComplete='off' required />
                Short Description:<input type="text" name="shortDescription" value={formData.shortDescription} onChange={handleChange} autoComplete='off' />
                Long Description:<textarea name="longDescription" value={formData.longDescription} onChange={handleChange} autoComplete='off' />
                Auther:<input type="text" name="authors" value={formData.authors} onChange={handleChange} autoComplete='off' required />
                <span className='font-italic font-weight-light d-block'>Use `,` to seperate names of diffrent authers</span>
                Categories:<input type="text" name="categories" value={formData.categories} onChange={handleChange} autoComplete='off' />
                <span className='font-italic font-weight-light d-block'>Use `,` to seperate names of diffrent Categories</span>
                Book Image:<input type="file" accept='image/*' name="file" onChange={filehandleChange} required />
                {file && <div> 
                    <h2>File Details:</h2> 
                    <p>File Name: {file.name}</p> 
                    <p>File Type: {file.type}</p>
                </div> }
                <button className='my-5' onClick={upload}>ADD BOOK</button>
            </div>
        </div>
    )
}

