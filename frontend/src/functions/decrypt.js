import { useContext } from "react";
import { mainContext } from "../context/mainProvider";
import { mainContext } from "../context/mainProvider";

export const decryptToken = () => {
    const {setUsername, setUser} = useContext(mainContext)
    const token = localStorage.getItem('token')
    const parts = token.split('.');
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    console.log(header, payload)
    const res = { header, payload }
    setUser(res.payload)
    setUsername(res.payload.username)
    return { header, payload };
  }