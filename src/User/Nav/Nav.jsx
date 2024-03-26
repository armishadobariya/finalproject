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
import { agentVerifyUrl, changeProfileUrl, deleteProfileUrl, userProfileUrl } from '../Components/Api';
import axios from 'axios';
import "./menu.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NearbyError } from '@mui/icons-material';



const Nav = () => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userRole, setUserRole] = useState('');
	const [userMobile, setUserMobile] = useState('');
	const [userImage, setUserImage] = useState({ image: null, isSet: false });
	const [isLogin, setIsLogin] = useState(false);
	const [open, setOpen] = useState(false);
	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
	const [isNavbarActive, setIsNavbarActive] = useState(false);
	const [email, setEmail] = useState('');
	const [response, setResponse] = useState('');
	const [newProfilePhoto, setNewProfilePhoto] = useState(null);
	const [deletePassword, setDeletePassword] = useState("");


	const [showButton, setShowButton] = useState(localStorage.getItem("user") === null); // State variable to track the condition



	const navigate = useNavigate();

	const getUserData = async () => {
		try {
			const token = localStorage.getItem('user');
			const tokenArray = JSON.parse(token);
			console.log(tokenArray[0]);
			const response = await axios.get(userProfileUrl, {
				headers: {
					Authorization: `Bearer ${tokenArray[0]}`,
				},
			});
			if (response.status === 200) {
				const data = response.data;
				console.log('data: ', data);
				setUserName(data.userData.name);
				setUserImage((pre) => {
					const image = {
						image: data.userData.profilePic, isSet: false,
					};
					return image;
				});
				setUserEmail(data.userData.email);
				setUserMobile(data.userData.mobileNo);
				setIsLogin(data.isLogin);
			}
		} catch (error) {
			console.error("fetch user data:", error.message);
		}
	}

	window.deleteProfile = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.delete(deleteProfileUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				// If the profile picture is deleted successfully
				setUserImage({ image: null, isSet: false }); // Reset user image state
				Swal.fire('Success!', 'Profile picture deleted.', 'success');
			} else {
				throw new Error(`Failed to delete profile picture: ${response.statusText}`);
			}
		} catch (error) {
			console.error('Error deleting profile picture:', error);
			Swal.fire('Error', 'Failed to delete profile picture.', 'error');
		}
	};

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


	const handleVerifyEmail = async (e) => {
		try {

			const reqData = {
				email: email,
			};
			console.log(email, "email")

			const responseData = await axios.post(agentVerifyUrl, { email: reqData.email });

			if (responseData.data.statusCode === 201) {
				console.log("done");
				console.log(responseData.data.message);
				setResponse('success', 'success..');
				setEmail('');

			}
		} catch (error) {
			toast.error("Error: " + error.message);
		}
	};


	const handleSetting = async (popupState) => {
		popupState.close();

		window.deleteProfile = async () => {
			try {
				const token = localStorage.getItem('token');
				const response = await axios.delete(deleteProfileUrl, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (response.status === 200) {
					// If the profile picture is deleted successfully
					setUserImage({ image: null, isSet: false }); // Reset user image state
					Swal.fire('Success!', 'Profile picture deleted.', 'success');
				} else {
					throw new Error(`Failed to delete profile picture: ${response.statusText}`);
				}
			} catch (error) {
				console.error('Error deleting profile picture:', error);
				Swal.fire('Error', 'Failed to delete profile picture.', 'error');
			}
		};

		window.confirmDelete = () => {

			Swal.fire({
				html: `
					<div class="profile-container" style="font-family: Arial, sans-serif; margin-top: 8px; padding: 20px;">
						<h1 style="color: #333; font-weight:bold; font-size:24px; color:grey;">Delete Account</h1>
						<hr style="border-color: #333; margin-top:10px;" />
						<div style="margin-top:20px;">
						<lable style=" margin-left:-235px;">Enter Your Password : <br>
						<input type="password" id="passwordInput" style="padding:8px;width:410px; margin-top:5px; " />
						</lable></div>

						
						<div style="display: flex; justify-content: center; margin-top:30px">
							<button id="deleteButton" style="margin-right: 10px; padding: 10px 20px; background-color: #FF0000; color: #fff; border: none; cursor: pointer; border-radius: 5px;">Delete</button>
						</div>
					</div>
				`,
				showConfirmButton: false,
			});




		};

		window.handleNoClick = () => {
			Swal.close();
		};


		window.deleteAcc = () => {

			Swal.fire({
				html: `
					<div class="profile-container" style="font-family: Arial, sans-serif; margin-top: 8px; padding: 20px;">
						<h1 style="color: #333; font-weight:bold; font-size:24px; color:grey;">Delete Account</h1>
						<hr style="border-color: #333; margin-top:10px;" />
						<p style="color: #666; margin-top:10px; font-size:15px">Are You Sure, You Want To Delete Your Account?</p>

						<div style="display: flex; justify-content: center; margin-top:30px">
							<button style="padding: 10px 20px; margin-right: 10px; background-color: #808080; color: #fff; border: none; cursor: pointer; border-radius: 5px;" onclick="handleNoClick()">No</button>
							<button id="editButton" style="margin-right: 10px; padding: 10px 20px; background-color: #007bff; color: #fff; border: none; cursor: pointer; border-radius: 5px;" onclick="confirmDelete()">Yes</button>
						</div>
					</div>
				`,
				showConfirmButton: false,
			});
		};

		window.need = () => {

			Swal.fire({
				html: `
					<div class="profile-container" style="font-family: Arial, sans-serif; margin-top: 8px; padding: 20px;">
						<h1 style="color: #333; font-weight:bold; font-size:24px; color:grey;">How we can help?</h1>
						<hr style="border-color: #333; margin-top:10px;" />
						<p style="color: #666; margin-top:5px; font-size:15px">I delete my account.</p>
						
						
						<div style=" justify-content: center; margin-top:30px">
							<div style=" border: 2px solid white; padding: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); cursor:pointer;"><span style="font-size:18px;margin-left:-250px;">Delete My Account</span><p style="margin-left:380px; margin-top:-27px; font-size:15px; font-weight:bold;">></p></div>
							</div>
					</div>
				`,
				showCancelButton: true,
				showConfirmButton: false,
				cancelButtonText: "Close",
			});



		};


		Swal.fire({
			title: "Settings",
			html: `
			<hr style="border-color: #333; margin-top:5px; margin-bottom:15px" />

				<div class="profile-container">
					<div class="avatar-container" style="display: flex; justify-content: center;">
						<img alt="Admin Image" id="profileImage" src=${userImage.isSet ? URL.createObjectURL(userImage.image) : userImage.image} style="cursor: pointer; margin-bottom:20px; height:150px; width:150px; border-radius: 50%;" onclick="profile()"  />

					</div>
					<div class="profile-details">
						<div style="margin-top: 10px; border: 2px solid white; padding: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);"><span style="margin-left:-350px;">Name : </span><p style="margin-left:370px; margin-top:-27px; font-size:15px">${userName}</p></div>
						<div style="margin-top: 10px; border: 2px solid white; padding: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);"><span style="margin-left:-350px;">Email : </span> <p style="margin-left:190px; margin-top:-27px; font-size:15px">${userEmail}</p></div>
						<div style="margin-top: 10px; border: 2px solid white; padding: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);"><span style="margin-left:-315px;">Mobile No : </span> <p style="margin-left:330px; margin-top:-27px; font-size:15px">${userMobile}</p></div>
						<div style="margin-top: 10px; border: 2px solid white; padding: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); cursor:pointer;" onclick="need()"><span style="margin-left:-310px;">I Need Help</span><p style="margin-left:400px; margin-top:-27px; font-size:15px; font-weight:bold;">></p></div>
						<hr style="border-color: gray; margin-bottom:15px" />

					</div>

				</div>
			`,
			showCancelButton: true,
			showConfirmButton: false,
			cancelButtonText: "Close",
		});


	}

	const handleShowProfile = async (popupState) => {
		popupState.close();
		getUserData();

		window.handleCancelClick = () => {
			Swal.close();
		};

		window.handleImageChange = (event) => {
			const selectedFile = event.target.files[0];
			if (selectedFile) {
				console.log('Selected File:', selectedFile.name);
			}
		}

		window.deleteProfile = async () => {
			try {
				const token = localStorage.getItem('token');
				const response = await axios.delete(deleteProfileUrl, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (response.status === 200) {
					// If the profile picture is deleted successfully
					setUserImage({ image: null, isSet: false }); // Reset user image state
					Swal.fire('Success!', 'Profile picture deleted.', 'success');
				} else {
					throw new Error(`Failed to delete profile picture: ${response.statusText}`);
				}
			} catch (error) {
				console.error('Error deleting profile picture:', error);
				Swal.fire('Error', 'Failed to delete profile picture.', 'error');
			}
		};


		window.profile = () => {

			Swal.fire({
				html: `


					<div class="profile-container" style="font-family: Arial, sans-serif; margin-top: 8px; padding: 20px;">
						<h1 style="color: #333; font-weight:bold; font-size:24px; color:grey;">Profile Picture</h1>

						<hr style="border-color: #333; margin-top:10px;" />
						<p style="color: #666; margin-top:5px; font-size:15px">A picture helps people recognize you and lets you know when you’re signed in to your account.</p>
						<div class="avatar-container" style="display: flex; justify-content: center; margin-top: 20px;">
							<img id="profileImage" src=${userImage.isSet ? URL.createObjectURL(userImage.image) : userImage.image} alt="User_Profile" style="height: 200px; width: 200px; border-radius: 50%;" />					
						</div>
						<div>
							<input id="imageInput" type='file' style="margin-bottom: 20px; margin-top: 20px; margin-left: 100px; outline: none; font-size:16px;" />
						</div>
						<div style="display: flex; justify-content: center; margin-top:10px">
							<button style="padding: 10px 20px; margin-right: 10px; background-color: #808080; color: #fff; border: none; cursor: pointer; border-radius: 5px;" onclick="handleCancelClick()">Cancel</button>
							<button id="editButton" style="margin-right: 10px; padding: 10px 20px; background-color: #007bff; color: #fff; border: none; cursor: pointer; border-radius: 5px;">Edit</button>
							<button id="editButton" style="margin-right: 10px; padding: 10px 20px; background-color: #FF0000; color: #fff; border: none; cursor: pointer; border-radius: 5px;" onclick="deleteProfile() ">Delete</button>
						</div>
					</div>
				`,
				showConfirmButton: false,
			});


			document.getElementById('editButton').onclick = editImage;
		};




		const editImage = async () => {
			try {
				const selectedImage = document.getElementById('imageInput').files[0];
				if (selectedImage) {
					const imageURL = URL.createObjectURL(selectedImage);
					document.getElementById('profileImage').src = imageURL;
				}

				const formData = new FormData();
				formData.append('profilePic', selectedImage);

				const token = localStorage.getItem('user');
				const tokenArray = JSON.parse(token);
				const response = await axios.post(changeProfileUrl, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${tokenArray[0]}`,
					},
				});

				if (response.status === 200) {
					const data = response.data;
					setUserImage({ image: data.image, isSet: false });
					Swal.fire('Success!', 'Profile picture updated.', 'success');
					// Swal.close();
				} else {
					throw new Error(`Failed to update profile picture: ${response.statusText}`);
				}
			} catch (error) {
				console.error('Error updating profile picture:', error);
				Swal.fire('Error', 'Failed to update profile picture.', 'error');
			}
		};


		Swal.fire({
			title: "Profile",
			html: `
			<hr style="border-color: #333; margin-top:5px; margin-bottom:15px" />

				<div class="profile-container">
					<div class="avatar-container" style="display: flex; justify-content: center;">
						<img alt="Admin Image" id="profileImage" src=${userImage.isSet ? URL.createObjectURL(userImage.image) : userImage.image} style="cursor: pointer; margin-bottom:20px; height:150px; width:150px; border-radius: 50%; " onclick="profile()"  />

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
		localStorage.removeItem('user');
		console.log("remove", localStorage.removeItem('user'));
		navigate('/UserLogin');
	};



	return (
		<div>
			<div className="msg">{response && <div>{response.message}</div>}</div>

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
										<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className='tw-w-full tw-h-11 tw-border 2 tw-rounded-md tw-pl-3' style={{ cursor: "text", outline: "grey" }} />
									</DialogContent>
									<DialogActions>
										<button onClick={handleClose} className='tw-font-semibold tw-mr-3 tw-p-2 tw-text-white tw-bg-black tw-rounded-md' style={{ width: "100px" }}>Cancel</button>
										<button type="submit" className='tw-font-semibold tw-mr-4 tw-p-2  tw-text-white tw-bg-black tw-rounded-md' style={{ width: "100px" }} onClick={handleVerifyEmail}>Verify</button>
									</DialogActions>
								</Dialog>


								{showButton ? (
									// Render button if showButton is true
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
								) : (
									// Render popup box if showButton is false
									<PopupState variant="popover" popupId="demo-popup-menu">
										{(popupState) => (
											<>
												<AccountCircleIcon
													className=' tw-ml-4'
													style={{ color: "#d3a478", height: "36px", width: "36px", marginRight: "10px", marginTop: '5px', cursor: 'pointer', overflowY: 'auto' }}
													variant="contained"
													{...bindTrigger(popupState)}
												>
												</AccountCircleIcon>
												<Menu {...bindMenu(popupState)} style={{ marginTop: '50px' }}>
													<MenuItem onClick={() => handleShowProfile(popupState)}>Profile</MenuItem>
													<MenuItem onClick={() => logOut(popupState)}>Logout</MenuItem>
													<MenuItem onClick={() => handleSetting(popupState)}>Settings</MenuItem>
												</Menu>
											</>
										)}
									</PopupState>
								)}





							</div>
						</form>
					</div>
				</div>
			</nav >
		</div >
	);
};

export default Nav;
