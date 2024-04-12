import { useContext } from "react"
import { mainContext } from "../context/MainProvider.jsx"
import { decryptToken } from "./decrypt.js"

export const login = async (event) => {
    console.log('operation succseed')
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const response = await fetch('http://localhost:3000/user/login',{
        method: 'POST',
        body: formData
    })
    const {status, token} = await response.json()
    localStorage.setItem("token", token)

}

export const register = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    fetch('http://localhost:3000/user/register',{
        method: 'POST',
        body: formData
    })
}

export const getUser = () =>{
    const {username, setUser} = useContext(mainContext)
    decryptToken()
    fetch(import.meta.env.VITE_BACKEND_URL+'/user/'+username)
    .then((response)=>response.json())
    .then((json)=>{
      setUser(json)
    })
}