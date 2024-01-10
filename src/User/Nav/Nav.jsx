import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import text from '../../Assests/Image/nest.jpg';
import logo from '../../Assests/Image/nav2.svg';
// import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { NavLink, useNavigate } from 'react-router-dom';
// import "./nav.css";


const Nav = () => {
	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
	const navigate = useNavigate();

	const handleNavbarToggle = () => {
		setIsNavbarCollapsed(!isNavbarCollapsed);
	};


	const showRegister = () => {
		navigate("/UserRegister");
	}

	const showLogin = () => {
		navigate("/UserLogin");
	}


	return (
		<div>
			<nav
				id="nav-bar"
				className="navbar navbar-expand-lg px-lg-3 py-lg-2 shadow-sm sticky-top"
				style={{ background: '#191919' }}
			>
				<div className="container-fluid">
					<a className="navbar-brand ml-4 me-5 fw-bold fs-3 h-font">
						<img src={logo} alt="" height="80px" width="180px" />
					</a>
					<button
						className="navbar-toggler"
						onClick={handleNavbarToggle}
						aria-controls="showNavbar"
						aria-expanded={!isNavbarCollapsed}
						aria-label="Toggle navigation"
						style={{ background: '#d3a478' }}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					{/* <div className='text-white'>
						<DensityMediumIcon
							className="navbar-toggler"
							onClick={handleNavbarToggle}
							aria-controls="showNavbar"
							aria-expanded={!isNavbarCollapsed}
							aria-label="Toggle navigation"
						/>
					</div> */}
					<div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="showNavbar" >
						<ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
							<NavLink className="nav-link me-4 text-white " to="/">
								Home
							</NavLink>
							<NavLink className="nav-link me-4 text-white" to="/features">
								Features
							</NavLink>
							<NavLink className="nav-link me-4 text-white" to="/contact">
								Contact
							</NavLink>
							<NavLink className="nav-link me-4 text-white" to="/about">
								About
							</NavLink>
							<NavLink className="nav-link text-white" to="/feedback">
								Feedback
							</NavLink>
						</ul>
						<form action="" method="post">
							<div className="d-flex">
								<button
									type="button"
									className="btn shadow-none me-lg-3 me-3 ms-3"
									data-bs-toggle="modal"
									data-bs-target="#loginModal"
									onClick={showLogin}
									id='btnLogin'
									style={{ background: '#d3a478' }}
								>
									Login
								</button>
								<button
									type="button"
									className="btn shadow-none me-lg-3 me-3"
									data-bs-toggle="modal"
									data-bs-target="#registerModal"
									onClick={showRegister}
									id="btnRegister"
									style={{ background: '#d3a478' }}
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;



// import React, { useState } from 'react';
// import './nav.css';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import { NavLink } from 'react-router-dom';


// const Nav = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const Links = [
// 		{ name: 'Dashboard', link: '/' },
// 		{ name: 'Food', link: '/food' },
// 		{ name: 'Order', link: '/order' },
// 		{ name: 'User', link: '/user' },
// 		{ name: 'Feedback', link: '/feedback' },
// 	]

// 	return (
// 		<>
// 			<div className='shadow-md w-full h-10 fixed top-0 left-0'>
// 				<div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
// 					<div className='text-2xl cursor-pointer items-center'>
// 						<span className=' text-orange-400 font-bold ' style={{ fontFamily: 'Caveat,cursive' }}>
// 							FoodEase
// 						</span>
// 					</div>
// 					<div className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => setIsOpen(!isOpen)}>
// 						{
// 							isOpen ? <XMarkIcon /> : <Bars3Icon />
// 						}

// 					</div>

// 					<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
// 						{Links.map((link) => (
// 							<li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
// 								<NavLink to={link.link} onClick={() => setIsOpen(false)} className='text-gray-800 hover:text-orange-400 duration-500'>
// 									{link.name}
// 								</NavLink>
// 							</li>
// 						))}
// 						<button className='bg-black text-white py-1 px-3 pb-2 md:ml-8 rounded md:static font-semibold duration-500'>Logout</button>
// 					</ul>

// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Nav;