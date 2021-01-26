import React,{Fragment} from 'react'
import Content from '../Components/LandingPage/Content'
import Header from '../Components/LandingPage/Header'
import Nav from '../Components/LandingPage/Nav'
import Footer from '../Components/LandingPage/Footer'
import {Route, Switch} from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import About from './About'
import Terms from './Terms'
import Profile from '../Components/LandingPage/Profile'
import PrivateRoute from '../functions/PrivateRoute'
import ListBooks from '../Components/LandingPage/ListBooks'

export default function Main() {

    return (
		<Fragment>
			<div id="wrapper">
				<Header/>
				<Switch>
					<PrivateRoute exact path='/product/:id' component={Product} />
					<Route exact path='/products' component={Products} />
					<Route exact path='/about' component={About} />
					<Route exact path='/terms' component={Terms} />
					<PrivateRoute exact path='/listbook' component={ListBooks} />
					<PrivateRoute exact path='/profile' component={Profile} />
					<Route path='/' component={Content} />
				</Switch>
				<Footer />
			</div>
			<Nav/>
		</Fragment>
    )
}
