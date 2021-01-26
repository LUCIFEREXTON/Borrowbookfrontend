import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAuth } from './Manage.sessions'
export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
          {...rest}
          render={routeProps => (
             isAuth()?<Component {...routeProps} />:<Redirect to='/login'/>
          )}
        />
      );
}
