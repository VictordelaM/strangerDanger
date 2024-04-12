import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return ( 
        <>
        <nav>
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to="/images"><button>Images</button></NavLink>
            <NavLink to="/Login"><button>Login</button></NavLink>
            <NavLink to="/Register"><button>Register</button></NavLink>
            <NavLink to="/UploadImg"><button>Image Upload</button></NavLink>
        </nav>
        </>
     );
}
 
export default Nav;