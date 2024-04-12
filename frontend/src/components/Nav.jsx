import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return ( 
        <>
        <NavLink>
            <Link to="/"><button>Home</button></Link>
            <Link to="/images"><button>Images</button></Link>
            <Link to="/Login"><button>Login</button></Link>
            <Link to="/Register"><button>Register</button></Link>
            <Link to="/UploadImg"><button>Image Upload</button></Link>
        </NavLink>
        </>
     );
}
 
export default Nav;