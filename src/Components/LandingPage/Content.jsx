import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from './Carousel'
import Tiles from './Tiles'
import LazyLoading from 'react-lazyload'

export default function Content() {
    return (
        <div id="main">
            <LazyLoading>
                <Carousel/>
            </LazyLoading>
            <br/>
            <br/>
            <div className="inner">
                <header id="inner">
                    <h1>Find your new book!</h1>
                    <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
                </header>
                <br/>
                <h2 className="h2">Featured Products</h2>
                <LazyLoading offset={100}>
                    <Tiles/>
                </LazyLoading>
                <p className="text-center"><Link to="/products">More Books &nbsp;<i className="fa fa-long-arrow-right"></i></Link></p>
                <br/>
            </div>
        </div>
    )
}
