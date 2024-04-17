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
        setUser(getUser(token))
      }, []);
    return ( 
        <>
        <Nav />
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, earum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam reprehenderit nobis enim odit debitis dolorem vel. Itaque praesentium nemo nihil, similique inventore consequuntur natus hic minus nisi non doloribus veniam ipsum eveniet qui quos molestiae blanditiis consectetur soluta et. Id autem ex alias sapiente libero, ipsa expedita et maxime magni qui placeat, dolor, maiores esse voluptatem porro. Quos eveniet incidunt cum similique tempore saepe accusantium nisi, amet inventore suscipit possimus, omnis tenetur ratione eaque magni error aut molestias placeat consectetur unde adipisci! Repellat omnis nemo fuga delectus ducimus non autem quod eveniet obcaecati, voluptatum iure est recusandae tempora, deserunt voluptatem!</p>
        </>
     );}
     else{
        return (
            <>
            <Nav />
            <p>login to see information</p>
            </>
            
        )
     }
}
 
export default Home;