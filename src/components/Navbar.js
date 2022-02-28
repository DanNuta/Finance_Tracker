import style from "./Navbar.modules.css";
import {Link} from "react-router-dom";

const Navbar = () => {

    return ( 
        <nav>
            <ul>
                <li><Link to="/">My money</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;