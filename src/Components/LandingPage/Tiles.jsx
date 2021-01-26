import React from 'react'
import Article from './Article'
import datas from '../../data.json'
export default function Tiles() {
    
    const books = [...datas.slice(0,10)]
    return (
        <section className="tiles">
            {books.map((data,i)=><Article key={data._id} id={data._id} styl={`style${(data._id)%6+1}`} imgsrc={`${data.thumbnailUrl}`} h2={data.title}/>)}
        </section>
    )
}
