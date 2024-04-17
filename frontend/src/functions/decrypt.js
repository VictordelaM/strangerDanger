import { useContext } from "react";
import { mainContext } from "../context/mainProvider";


export const decryptToken = () => {
    const token = localStorage.getItem('token')
    const parts = token.split('.');
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    const res = { header, payload }
    return { header, payload };
  }