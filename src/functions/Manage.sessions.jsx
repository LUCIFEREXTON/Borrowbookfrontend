import cookies from 'js-cookie'
import axios from 'axios'

export const login= (cb,res) =>{
    if (window !== 'undefined') {
        cookies.set('token',res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user));
    }
    cb()
}

export const logout = cb => {
    if (window !== 'undefined') {
        cookies.remove('token')
        localStorage.removeItem('user')
    }
    cb()
}

export const token = cookies.get('token')

export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = cookies.get('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false;
            }
        }
    }
}


export const location = () =>{
    if(window!=='undefined'){
        if (window.navigator.geolocation) {
            const location = localStorage.getItem('location')
            if(location){
                return location
            }
            axios.get('http://ip-api.com/json')
                    .then(res=>{
                        console.log(res.data.city)
                        localStorage.setItem('location', res.data.city);
                        return res.data.city
                    })
                    .catch(err=>{
                        console.log(JSON.stringify(err))
                        return 'Enter Location'
                    })
        } 
    }
}

export const setlocation = location => {
    localStorage.setItem('location', location)
}