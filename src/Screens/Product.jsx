import React,{useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Article from '../Components/LandingPage/Article';
import ContactDetail from '../Components/LandingPage/ContactDetail';
// import Article from '../Components/LandingPage/Article'
import books from '../data.json'

export default function Product() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    const bookid = useParams().id
    const [book,setbook] = useState([{}]); 
    const [authors, setauthors] = useState([]);
    const [categories, setcategories] = useState([]);
    const [similar,setsimilar] = useState([{}])
    if((book[0].categories!==undefined) && (similar[0].categories===undefined)){
        const categories = [...book[0].categories]
        let temp = books.filter(book=>book.categories.some(item => categories.includes(item)))
        temp = temp.filter(check=>check._id!==book[0]._id)
        setsimilar(temp)
    }
    const [date, setdate] = useState('')
    useEffect(() => {
        const data = books.filter(book=>book._id===parseInt(bookid))
        setbook(data)
        const author = data[0].authors.map(name=>name)
        const category = data[0].categories.map(category=>category)
        setauthors(author)
        setcategories(category)
        setdate(data[0].date.split('T')[0])
    }, [bookid])

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div id="main">
            <div className="inner">
                <h1>{book[0].title}{authors.map((author,i)=><span key={i} style={{fontSize:'2rem',marginRight:'1rem'}} className='pull-right'>{author}</span>)}</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={book[0].thumbnailUrl} className="position-sticky sticky-top img-fluid col-md-12" alt={book[0].title}/>
                        </div>
                        <div className="col-md-8">
                            <div className="container m-1 border border-gray" style={{maxWidth:'fit-content'}}>
                            <h2>{categories.map((category,i)=><span key={i} className="badge badge-pill badge-primary my-4 m-2">{category}</span>)}</h2>    
                            
                                <div>
                                    <h3>ISBN:    {book[0].isbn}</h3>
                                    <h3>Page Count:  {book[0].pageCount}</h3>
                                    <h3>Published Date:  {date}</h3>
                                </div>
                            </div>
                            <p>{book[0].shortDescription}</p>
                            <p>{book[0].longDescription}</p>
                        </div>
                    </div>
                </div>
                <br />
                <ContactDetail edit={false} email={book[0].email} contact={book[0].contact} address={book[0].address} />
                <br />
                <div className="container-fluid">
                    <h2 className="h2">Similar Products</h2>

                    
                    <section className="tiles">
                        {similar.map((data,i)=><Article key={i} id={data._id} styl={`style${(data._id)%6+1}`} imgsrc={`${data.thumbnailUrl}`} h2={data.title} p={data.shortDescription}/>)}
                    </section>
                </div>
            </div>
        </div>
    )
}
