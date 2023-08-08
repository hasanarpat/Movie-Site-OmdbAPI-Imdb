import { Link } from "react-router-dom";
import "./navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen((prev) => !prev);
		console.log(open);
	};
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="navLogo">
					<img src="/img/logo.png" alt="" />
					<Link to="/" className="link">
						<span className="bannerTitle">MOVIE</span>
					</Link>
				</div>
				<div className="items">
					<div className="item">
						<Link to="/" className="link">
							Home
						</Link>
						<HomeIcon className="icon" />
					</div>
					<div className="item">
						<Link to="favorite" className="link">
							Favorites
						</Link>
						<FavoriteIcon className="icon" />
					</div>
				</div>
				<div
					className={open ? "hamburger open" : "hamburger"}
					onClick={() => handleOpen()}
				>
					<div className="hambWrapper">
						<div className="lines">
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
						<div className="hambItems">
							<div className="item">
								<Link to="/" className="link">
									Home
								</Link>
								<HomeIcon className="icon" />
							</div>
							<div className="item">
								<Link to="favorite" className="link">
									Favorites
								</Link>
								<FavoriteIcon className="icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
