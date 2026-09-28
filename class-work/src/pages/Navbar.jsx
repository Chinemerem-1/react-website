import { Link } from "react-router-dom"
import { FaHouseDamage } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Navbar = () => {

    const icons = {
        backgroundColor: "green",
        color: "white",
        margin: "0px 20px",
        padding: "10px 20px"
    }

    return (
        <>
            <div>
                <FaHouseDamage style={{color:"red",padding:"10px 20px",backgroundColor:"blueviolet"}}/>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Blog">Blog</Link>
                <FaEye style={icons}/>
            </div>
        </>
        
    )
}

export default Navbar