import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import text from '../../Assests/Image/nest.jpg';
import logo from '../../Assests/Image/nav2.svg';
// import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { NavLink, useNavigate } from 'react-router-dom';
import "./menu.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const Nav = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
	const [isNavbarActive, setIsNavbarActive] = useState(false);

	const navigate = useNavigate();


	const handleNavbarToggle = () => {
		setIsNavbarCollapsed(!isNavbarCollapsed);
		setIsNavbarActive(!isNavbarActive);

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
				className="navbar navbar-expand-lg px-lg-3 py-lg-2 shadow-sm sticky_nav"
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

					<div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="showNavbar" >
						<ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
							<NavLink className="nav-link me-4 text-white " to="/">
								Home
							</NavLink>
							<NavLink className="nav-link me-4 text-white" to="/contact">
								Contact
							</NavLink>
							<NavLink className="nav-link me-4 text-white" to="/about">
								About
							</NavLink>
							<NavLink className="nav-link me-4 text-white" to="/propertyHistory">
								Status
							</NavLink>
							<NavLink className="nav-link text-white" to="/feedback">
								Feedback
							</NavLink>
						</ul>
						<form action="" method="post">
							<div className="d-flex">
								{/* <button
									type="button"
									className="btn shadow-none me-lg-3 me-3 ms-3"
									data-bs-toggle="modal"
									data-bs-target="#loginModal"
									onClick={showLogin}
									id='btnLogin'
									style={{ background: '#d3a478' }}

								>
									Request as an agent
								</button> */}

								{/* <div className='data-bs-toggle="modal" data-bs-target="#staticBackdrop"'>
									<a href="#" style={{ color: '#d3a478', BorderBottom: "1px solid #d3a478" }} className=' tw-grid tw-place-content-center' >Request As an Agent</a>
								</div> */}
								<Button variant="outlined" onClick={handleClickOpen} className=' tw-text-white tw-border-2 ' style={{ border: "1px solid white" }}>
									Request as an agent
								</Button>
								<Dialog
									open={open}
									onClose={handleClose}
									PaperProps={{
										component: 'form',
										onSubmit: (event) => {
											event.preventDefault();
											const formData = new FormData(event.currentTarget);
											const formJson = Object.fromEntries(formData.entries());
											const email = formJson.email;
											console.log(email);
											handleClose();
										},
									}}
								>
									<DialogTitle>Verify Your Email</DialogTitle>
									<DialogContent>
										<DialogContentText>
											To register as an anagent to this website, please enter your email address here. We
											will send updates occasionally.
										</DialogContentText>

										<label htmlFor="email" className='  tw-mt-4 tw-text-lg '>Enter Your Email</label>
										<input type="email" name="email" id="email" className=' tw-w-full tw-h-11 tw-border 2 tw-rounded-md tw-pl-3' style={{ cursor: "text", outline: "grey" }} />
									</DialogContent>
									<DialogActions>
										<button onClick={handleClose} className=' tw-font-semibold tw-mr-3 tw-p-2 tw-text-white tw-bg-black tw-rounded-md ' style={{ width: "100px" }}>Cancel</button>
										<button type="submit" className=' tw-font-semibold tw-mr-4 tw-p-2  tw-text-white tw-bg-black tw-rounded-md ' style={{ width: "100px" }}>Verify</button>
									</DialogActions>
								</Dialog>
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

								{/* <button
									type="button"
									className="btn shadow-none me-lg-3 me-3"
									data-bs-toggle="modal"
									data-bs-target="#registerModal"
									onClick={showRegister}
									id="btnRegister"
									style={{ background: '#d3a478' }}
								>
									Register
								</button> */}
							</div>
						</form>
					</div>
				</div >
			</nav >
		</div >
	);
};

export default Nav;

