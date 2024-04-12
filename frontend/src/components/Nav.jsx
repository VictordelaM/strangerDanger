import { Link } from "react-router-dom"

const Nav = () => {
    return ( 
        <>
        <nav>
            <link to="/"><button>Home</button></link>
            <link to="/images"><button>Images</button></link>
            <link to="/Login"><button>Login</button></link>
            <link to="/Register"><button>Register</button></link>
            <link to="/UploadImg"><button>Image Upload</button></link>
        </nav>
        </>
     );
}
 
export default Nav;