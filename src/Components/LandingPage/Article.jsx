import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoading from 'react-lazyload'

export default function Article(props) {
    return (
        <article className={props.styl}>
                <span className="image">
                    <LazyLoading offset={50}>
                        <img  src={props.imgsrc} alt="" />
                    </LazyLoading>
                </span>
            <Link to={`/product/${props.id}`}>
                <h2>{props.h2}</h2>
            </Link>
        </article>
    )
}
