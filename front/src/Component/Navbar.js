import { Link } from "react-router-dom";
import "./Navbar.css";
import icon from "./navbaricon.png";

function Navbar({ isLoggedIn, isPaid }) {
	return (
		<div id="navbar">
			<div id="navbar-main">
				<div id="navbar-main-left">
					<Link id="navbar-logo-link" to="/">
						<img id="navbar-logo-img" src={icon} alt="logo" />
					</Link>
				</div>
				<div id="navbar-main-middle"></div>
				<div id="navbar-main-right"></div>
			</div>
			<div id="navbar-sub">
				<div id="navbar-sub-left"></div>
				<div id="navbar-sub-middle"></div>
				<div id="navbar-sub-right"></div>
			</div>
		</div>
	);
}

export default Navbar;
