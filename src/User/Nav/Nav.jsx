import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assests/Image/nav2.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
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
import { changeProfileUrl, userProfileUrl } from '../Components/Api';
import axios from 'axios';
import "./menu.css";

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
	const [userEmail, setUserEmail] = useState('');
	const [userRole, setUserRole] = useState('');
	const [image, setImage] = useState();
	const [userMobile, setUserMobile] = useState('');
	const [userImage, setUserImage] = useState({ image: null, isSet: false });
	const [isLogin, setIsLogin] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
	const [isNavbarActive, setIsNavbarActive] = useState(false);


	const navigate = useNavigate();

	const getUserData = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get(userProfileUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				const data = response.data;
				// console.log('data: ', data);
				setUserName(data.userData.name);
				setUserImage((pre) => {
					const image = {
						image: data.userData.profilePic, isSet: false,
					};
					return image;
				});
				setUserEmail(data.userData.email);
				setUserMobile(data.userData.mobileNo);
				// setUserRole(data.userData.role);
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




	const showLogin = () => {
		navigate("/UserLogin");
	}






	const handleShowProfile = async (popupState) => {
		popupState.close();
		getUserData();

		window.handleCancelClick = () => {
			Swal.close();
		};



		window.handleImageChange1 = (event) => {
			if (event.target.files.length > 0) {
				const file = event.target.files[0];
				console.log('Selected File:', file);
			}
		}

		window.editImage = async (e) => {
			try {
				console.log('hello');
				const formData = new FormData();
				formData.append('image', userImage.image);

				const token = localStorage.getItem('token');
				const response = await axios.post(changeProfileUrl, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${token}`,
					},

				});
				console.log(response.status);
				if (response.status == 200) {
					console.log('success');
					const data = response.data;
					console.log(data);
					setUserImage({
						image: data.profilePic,
						isSet: false,
					});

				}
			} catch (error) {
				console.error("fetch user data:", error.message);
			}
		}

		window.profile = () => {
			Swal.fire({
				html: `
				  <div class="profile-container" style="font-family: Arial, sans-serif; margin-top: 8px; padding: 20px;">
					<h1 style="color: #333; font-weight:bold; font-size:24px; color:grey;">Profile Picture</h1>
					<hr style="border-color: #333; margin-top:10px;" />
					<p style="color: #666; margin-top:5px; font-size:15px">A picture helps people recognize you and lets you know when you’re signed in to your account.</p>
					<div class="avatar-container" style="display: flex; justify-content: center; margin-top: 20px;">
					<img src=${userImage.isSet ? URL.createObjectURL(userImage.image) : userImage.image} alt="User_Profile" style="
						height: 200px; width: 200px;" />					
						</div>
					<div>
					<input type='file' style="margin-bottom: 20px; margin-top: 20px; margin-left: 100px; outline: none; font-size:16px;"  />
					</div>
					<div style="display: flex; justify-content: center; margin-top:10px" >
					<button style="padding: 10px 20px; margin-right: 10px; background-color: #dc3545; color: #fff; border: none; cursor: pointer; border-radius: 5px;"  onclick="handleCancelClick()">Cancel</button>
					<button  style="margin-right: 10px; padding: 10px 20px; background-color: #007bff; color: #fff; border: none; cursor: pointer; border-radius: 5px;" onclick="editImage()">Edit</button>
					</div>
				  </div>
				`,
				showConfirmButton: false,
			});
		};



		Swal.fire({
			title: "Profile",
			html: `
			<hr style="border-color: #333; margin-top:5px; margin-bottom:15px" />

				<div class="profile-container">
					<div class="avatar-container" style="display: flex; justify-content: center;">
						<img alt="Admin Image" style="cursor: pointer; margin-bottom:20px; height:150px; width:150px;" onclick="profile()" src=${userImage.isSet ? URL.createObjectURL(userImage.image) : userImage.image} />

					</div>
					<div class="profile-details">
						<p style="font-weight: bold">Name: ${userName}</p>
						<p style="font-weight: bold">Email: ${userEmail}</p>
						<p style="font-weight: bold">Mobile: ${userMobile}</p>
						
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
				// className="navbar navbar-expand-lg px-lg-3 py-lg-2 shadow-sm sticky_nav"
				className="sticky_nav navbar navbar-expand-lg px-lg-3 py-lg-2 shadow-sm "
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
											<AccountCircleIcon
												style={{ color: "#d3a478", height: "36px", width: "36px", marginRight: "10px", marginTop: '5px', cursor: 'pointer', overflowY: 'auto' }}
												variant="contained"
												{...bindTrigger(popupState)}
											>
											</AccountCircleIcon>
											<Menu {...bindMenu(popupState)} style={{ marginTop: '50px' }}>
												<MenuItem onClick={() => handleShowProfile(popupState)}>Profile</MenuItem>
												<MenuItem onClick={() => logOut(popupState)}>Logout</MenuItem>
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

