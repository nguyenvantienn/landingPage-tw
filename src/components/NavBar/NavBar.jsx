import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";
const NavBar = (props) => {
	const { isMobile } = props;
	const [openMenu, setOpenMenu] = useState(false);

	const handleMenu = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<nav className="flex items-center">
			<div className="flex item-center">
				<div className="text-[1.25rem] font-bold pr-4">NavCard</div>
				<BsFillSunFill
					size={"24px"}
					color="#e9c46a"
					className="cursor-pointer"
				/>
			</div>
			<ul className="md:flex md:gap-10 ml-auto textx-16 font-semibold">
				{openMenu && isMobile ? (
					<MdOutlineClose
						size={"24px"}
						className="cursor-pointer"
						onClick={handleMenu}
					/>
				) : !openMenu && isMobile ? (
					<HiOutlineMenu
						size={"24px"}
						className="cursor-pointer"
						onClick={handleMenu}
					/>
				) : (
					<>
						<li className="hover:text-purple-500 transition-all duration-200 cursor-pointer list-none">
							Features
						</li>
						<li className="hover:text-purple-500 transition-all duration-200 cursor-pointer list-none">
							Menu
						</li>
						<li className="hover:text-purple-500 transition-all duration-200 cursor-pointer list-none">
							Our Story
						</li>
						<li className="hover:text-purple-500 transition-all duration-200 cursor-pointer list-none md:ml-[46px]">
							Contact
						</li>
					</>
				)}
				{openMenu && (
					<div className="absolute right-6 bg-white p-8 text-center text-13 text-black">
						<li className="cursor-pointer list-none">Features</li>
						<li className="cursor-pointer list-none">Menu</li>
						<li className="cursor-pointer list-none">Our Story</li>
						<li className="cursor-pointer list-none">Contact</li>
					</div>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
