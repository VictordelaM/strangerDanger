import { useContext } from "react";
import { mainContext } from "../context/mainProvider";


export const decryptToken = () => {
    // const {setUsername} = useContext(mainContext)
    const token = localStorage.getItem('token')
    const parts = token.split('.');
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    console.log(header, payload)
    const res = { header, payload }
    // setUsername(res.payload.username)
    return { header, payload };
  }