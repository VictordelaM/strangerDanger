import { useContext ,useEffect} from "react";
import Nav from "../components/nav/Nav";
import { decryptToken } from "../functions/decrypt";
import { mainContext } from "../context/mainProvider";
import { getUser } from "../functions/fetches";

const Home = () => {
    if(localStorage.getItem('token')){
    const {user, setUsername, setUser,token} = useContext(mainContext)
    setUsername(token)
    useEffect(() => {
        const token = decryptToken().payload.username
        getUser(token, setUser)
        console.log(user)
      }, []);
      console.log(user?.username)
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