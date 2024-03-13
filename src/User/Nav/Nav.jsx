// import React, { useEffect, useState } from 'react';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import text from '../../Assests/Image/nest.jpg';
// import logo from '../../Assests/Image/nav2.svg';
// // import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import { NavLink, useNavigate } from 'react-router-dom';
// import "./menu.css";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Swal from "sweetalert2";
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import createSvgIcon from '@material-ui/core/utils/createSvgIcon';

// import { userPofileUrl } from '../Components/Api';
// import axios from 'axios';

// const style = {
// 	position: 'absolute',
// 	top: '20%',
// 	left: '20%',
// 	transform: 'translate(-50%, -50%)',
// 	width: 300,
// 	bgcolor: 'background.paper',
// 	border: '2px solid #000',
// 	boxShadow: 24,
// };

// const Nav = () => {



// 	const [userName, setUserName] = useState('');
// 	const [userEmail, setUserEmail] = useState(false);
// 	const [userRole, setUserRole] = useState(false);
// 	const [userImage, setUserImage] = useState({ image: null, isSet: false });
// 	const [isLogin, setIsLogin] = useState(false);


// 	const getUserData = async () => {
// 		try {
// 			const token = localStorage.getItem('token');
// 			const response = await axios.get(userPofileUrl, {
// 				headers: {
// 					Authorization: `Bearer ${token}`,
// 				},

// 			});
// 			if (response.status === 200) {
// 				console.log('success');
// 				const data = response.data;
// 				console.log("data", data);
// 				setUserName(data.userData.name);
// 				console.log(data.userData.name);
// 				console.log(setUserName(data.userData.name));

// 				setUserImage((pre) => {
// 					const image = {
// 						image: data.image, isSet: false,
// 					};
// 					return image
// 				});

// 				console.log(data.userData.email);
// 				console.log(data.userData.role);

// 				setUserEmail(data.userData.email);
// 				setIsLogin(data.isLogin);
// 				// setUserRole(data.role);


// 				console.log(data.isLogin);
// 				console.log(data);
// 			}
// 		} catch (error) {
// 			console.error("fetch user data:", error.message);
// 		}
// 	}


// 	const [open, setOpen] = React.useState(false);

// 	const handleClickOpen = () => {
// 		setOpen(true);
// 	};

// 	const handleClose = () => {
// 		setOpen(false);
// 	};


// 	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
// 	const [isNavbarActive, setIsNavbarActive] = useState(false);

// 	const navigate = useNavigate();


// 	const handleNavbarToggle = () => {
// 		setIsNavbarCollapsed(!isNavbarCollapsed);
// 		setIsNavbarActive(!isNavbarActive);

// 	};

// 	useEffect(() => {
// 		getUserData();
// 	}, []);

// 	const showRegister = () => {
// 		navigate("/UserRegister");
// 	}

// 	const showLogin = () => {
// 		navigate("/UserLogin");
// 	}
// 	const handleShowProfile = async (popupState) => {
// 		popupState.close();
// 		getUserData();

// 		Swal.fire({
// 			title: "Profile",
// 			html: `
// 				<div class="profile-container">
// 					<div class="avatar-container" style="display: flex; justify-content: center;">
// 						<img alt="Admin Image" src="https://cdn.vectorstock.com/i/preview-1x/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg" />
// 					</div>
// 					<div class="profile-details">
// 						<p style="font-weight: bold">Name: ${userName}</p>
// 						<p style="font-weight: bold">Email: ${userEmail}</p>
// 						<p style="font-weight: bold">Role: User</p>
// 						<button class="edit-button" onclick="handleEditProfile()">Edit</button>
// 					</div>
// 				</div>
// 			`,
// 			showCancelButton: true,
// 			showConfirmButton: false,
// 			cancelButtonText: "Close",
// 		})

// 			.then((result) => {
// 			});
// 	};

// 	const logOut = () => {
// 		navigate('/UserLogin');
// 	};

// 	return (
// 		<div>
// 			<nav
// 				id="nav-bar"
// 				className="navbar navbar-expand-lg px-lg-3 py-lg-2 shadow-sm sticky_nav"
// 				style={{ background: '#191919' }}
// 			>
// 				<div className="container-fluid">
// 					<a className="navbar-brand ml-4 me-5 fw-bold fs-3 h-font">

// 						<img src={logo} alt="" height="80px" width="180px" />
// 					</a>


// 					<button
// 						className="navbar-toggler"
// 						onClick={handleNavbarToggle}
// 						aria-controls="showNavbar"
// 						aria-expanded={!isNavbarCollapsed}
// 						aria-label="Toggle navigation"
// 						style={{ background: '#d3a478' }}
// 					>
// 						<span className="navbar-toggler-icon"></span>
// 					</button>

// 					<div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="showNavbar" >
// 						<ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
// 							<NavLink className="nav-link me-4 text-white " to="/">
// 								Home
// 							</NavLink>
// 							<NavLink className="nav-link me-4 text-white" to="/contact">
// 								Contact
// 							</NavLink>
// 							<NavLink className="nav-link me-4 text-white" to="/about">
// 								About
// 							</NavLink>
// 							<NavLink className="nav-link me-4 text-white" to="/propertyHistory">
// 								Status
// 							</NavLink>
// 							<NavLink className="nav-link text-white" to="/feedback">
// 								Feedback
// 							</NavLink>
// 						</ul>
// 						<form action="" method="post">
// 							<div className="d-flex">

// 								<Button variant="outlined" onClick={handleClickOpen} className=' tw-text-white tw-border-2 ' style={{ border: "1px solid white" }}>
// 									Request as an agent
// 								</Button>
// 								<Dialog
// 									open={open}
// 									onClose={handleClose}
// 									PaperProps={{
// 										component: 'form',
// 										onSubmit: (event) => {
// 											event.preventDefault();
// 											const formData = new FormData(event.currentTarget);
// 											const formJson = Object.fromEntries(formData.entries());
// 											const email = formJson.email;
// 											console.log(email);
// 											handleClose();
// 										},
// 									}}
// 								>
// 									<DialogTitle>Verify Your Email</DialogTitle>
// 									<DialogContent>
// 										<DialogContentText>
// 											To register as an anagent to this website, please enter your email address here. We
// 											will send updates occasionally.
// 										</DialogContentText>

// 										<label htmlFor="email" className='  tw-mt-4 tw-text-lg '>Enter Your Email</label>
// 										<input type="email" name="email" id="email" className=' tw-w-full tw-h-11 tw-border 2 tw-rounded-md tw-pl-3' style={{ cursor: "text", outline: "grey" }} />
// 									</DialogContent>
// 									<DialogActions>
// 										<button onClick={handleClose} className=' tw-font-semibold tw-mr-3 tw-p-2 tw-text-white tw-bg-black tw-rounded-md ' style={{ width: "100px" }}>Cancel</button>
// 										<button type="submit" className=' tw-font-semibold tw-mr-4 tw-p-2  tw-text-white tw-bg-black tw-rounded-md ' style={{ width: "100px" }}>Verify</button>
// 									</DialogActions>
// 								</Dialog>
// 								<button
// 									type="button"
// 									className="btn shadow-none me-lg-3 me-3 ms-3"
// 									data-bs-toggle="modal"
// 									data-bs-target="#loginModal"
// 									onClick={showLogin}
// 									id='btnLogin'
// 									style={{ background: '#d3a478' }}
// 								>
// 									Login
// 								</button>

// 								<PopupState variant="popover" popupId="demo-popup-menu">
// 									{(popupState) => (
// 										<>
// 											<AccountCircleIcon
// 												style={{ color: "#d3a478", height: "36px", width: "36px", marginRight: "20px", marginTop: '5px', cursor: 'pointer', overflowY: 'auto' }}
// 												variant="contained"
// 												{...bindTrigger(popupState)}
// 											>
// 											</AccountCircleIcon>
// 											<Menu {...bindMenu(popupState)} style={{ marginTop: '50px' }}>
// 												<MenuItem onClick={() => handleShowProfile(popupState)}>Profile</MenuItem>
// 												<MenuItem onClick={() => logOut(popupState)}>Logout</MenuItem>
// 											</Menu>
// 										</>
// 									)}
// 								</PopupState>



// 							</div>
// 						</form>
// 					</div>
// 				</div >
// 			</nav >
// 		</div >
// 	);
// };

// export default Nav;



import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assests/Image/nav2.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from "sweetalert2";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { userPofileUrl } from '../Components/Api';
import axios from 'axios';

const style = {
	position: 'absolute',
	top: '20%',
	left: '20%',
	transform: 'translate(-50%, -50%)',
	width: 300,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
};

const Nav = () => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState(false);
	const [userRole, setUserRole] = useState(false);
	const [userImage, setUserImage] = useState({ image: null, isSet: false });
	const [isLogin, setIsLogin] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
	const [isNavbarActive, setIsNavbarActive] = useState(false);

	const navigate = useNavigate();

	const getUserData = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get(userPofileUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				const data = response.data;
				setUserName(data.userData.name);
				setUserImage((pre) => ({ image: data.image, isSet: false }));
				setUserEmail(data.userData.email);
				setIsLogin(data.isLogin);
			}
		} catch (error) {
			console.error("fetch user data:", error.message);
		}
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleNavbarToggle = () => {
		setIsNavbarCollapsed(!isNavbarCollapsed);
		setIsNavbarActive(!isNavbarActive);
	};

	useEffect(() => {
		getUserData();
	}, []);

	const showRegister = () => {
		navigate("/UserRegister");
	}

	const showLogin = () => {
		navigate("/UserLogin");
	}
	const handleEditProfile = async (popupState) => {
		console.log('Edit profile clicked');
		popupState.close();

		Swal.fire({
			title: "Profile",
			html: `
        <div class="profile-container">
          <div class="avatar-container" style="display: flex; justify-content: center;">
            <img alt="Admin Image" src="https://cdn.vectorstock.com/i/preview-1x/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg" />
          </div>
          <div class="profile-details">
            <p style="font-weight: bold">Name: 123</p>
            <p style="font-weight: bold">Email: 123@gmail.com/p>
            <p style="font-weight: bold">Role: User</p>
          </div>
        </div>
      `,
			showCancelButton: true,
			showConfirmButton: false,
			cancelButtonText: "Close",
		});
	};
	const handleShowProfile = async (popupState) => {
		popupState.close();
		getUserData();

		Swal.fire({
			title: "Profile",
			html: `
        <div class="profile-container">
          <div class="avatar-container" style="display: flex; justify-content: center;">
            <img alt="Admin Image" src="https://cdn.vectorstock.com/i/preview-1x/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg" />
          </div>
          <div class="profile-details">
            <p style="font-weight: bold">Name: ${userName}</p>
            <p style="font-weight: bold">Email: ${userEmail}</p>
            <p style="font-weight: bold">Role: User</p>
			// <button class="edit-button" onclick="handleEditProfile()">Edit</button>
			<button className="edit-button" onClick={() => handleEditProfile(popupState)}>Edit</button>

			</div>
        </div>
      `,
			showCancelButton: true,
			showConfirmButton: false,
			cancelButtonText: "Close",
		});
	};

	const logOut = () => {
		navigate('/UserLogin');
	};



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

					<div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="showNavbar">
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
								<Button variant="outlined" onClick={handleClickOpen} className='tw-text-white tw-border-2' style={{ border: "1px solid white" }}>
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
											To register as an agent on this website, please enter your email address here. We will send updates occasionally.
										</DialogContentText>
										<label htmlFor="email" className='tw-mt-4 tw-text-lg'>Enter Your Email</label>
										<input type="email" name="email" id="email" className='tw-w-full tw-h-11 tw-border 2 tw-rounded-md tw-pl-3' style={{ cursor: "text", outline: "grey" }} />
									</DialogContent>
									<DialogActions>
										<button onClick={handleClose} className='tw-font-semibold tw-mr-3 tw-p-2 tw-text-white tw-bg-black tw-rounded-md' style={{ width: "100px" }}>Cancel</button>
										<button type="submit" className='tw-font-semibold tw-mr-4 tw-p-2  tw-text-white tw-bg-black tw-rounded-md' style={{ width: "100px" }}>Verify</button>
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

								<PopupState variant="popover" popupId="demo-popup-menu">
									{(popupState) => (
										<>
											<IconButton
												style={{ color: "#d3a478", marginRight: "20px", marginTop: '5px', cursor: 'pointer' }}
												{...bindTrigger(popupState)}
											>
												<AccountCircleIcon />
											</IconButton>
											<Menu {...bindMenu(popupState)} style={{ marginTop: '50px' }}>
												<MenuItem onClick={() => handleShowProfile(popupState)}>Profile</MenuItem>
												<MenuItem onClick={() => logOut(popupState)}>Logout</MenuItem>
												{/* <MenuItem onClick={() => handleEditProfile(popupState)}>
													<IconButton>
														<EditIcon fontSize="small" />
													</IconButton>
													Edit Profile
												</MenuItem> */}

											</Menu>
										</>
									)}
								</PopupState>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;