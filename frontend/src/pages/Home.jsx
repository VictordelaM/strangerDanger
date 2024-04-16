import { useContext ,useEffect} from "react";
import Nav from "../components/nav/Nav";
import { decryptToken } from "../functions/decrypt";
import { mainContext } from "../context/mainProvider";
import { getUser } from "../functions/fetches";

const Home = () => {
    console.log(import.meta.env.OWN_URL)
    console.log(import.meta.env.VITE_BACKEND_URL)
    if(localStorage.getItem('token')){
    const {user, setUsername, setUser,token} = useContext(mainContext)
    setUsername(token)
    useEffect(() => {
        const token = decryptToken().payload.username
        getUser(token, setUser)
      }, []);
    return ( 
        <>
        <Nav />
        <p>{user?.username}</p>
        </>
     );}
     else{
        return (
            <>
            <Nav />
            <p>login to see username</p>
            </>
            
        )
     }
}
 
export default Home;