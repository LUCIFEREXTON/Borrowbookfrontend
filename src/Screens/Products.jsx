import React from 'react'
import { useState, useEffect } from 'react'
import Article from '../Components/LandingPage/Article'
import Pagination from '../Components/LandingPage/Pagination'
import Search from '../Components/LandingPage/Search'
import datas from '../data.json'
import LazyLoading from 'react-lazyload'

export default function Products() {
    const [article, setarticle] = useState([])

    const search = (name) =>{
        const articles = datas.filter(book=>book.title.toUpperCase().indexOf(name.toUpperCase()) > -1)
        setarticle(articles.map((data,i)=><Article key={data._id} id={data._id} styl={`style${(data._id)%6+1}`} imgsrc={`${data.thumbnailUrl}`} h2={data.title} p={data.shortDescription}/>))
    }
    
    useEffect(() => {
        const articles= datas.map((data,i)=><Article key={data._id} id={data._id} styl={`style${(data._id)%6+1}`} imgsrc={`${data.thumbnailUrl}`} h2={data.title} p={data.shortDescription}/>)
        setarticle(articles)
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div id="main">
            <div className="inner">
                <Search search={search}/>
                <h1>Products</h1>
                <div className="image main">
                    <LazyLoading>
                        <img src="images/banner-image-6-1920x500.jpg" className="img-fluid" alt="" />
                    </LazyLoading>
                </div>
                <Pagination books={article}/>
            </div>
        </div>
    )
}
