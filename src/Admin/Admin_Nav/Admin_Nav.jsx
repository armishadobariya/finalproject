// import React from 'react';
import logo from '../../Assests/Image/nav2.svg';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Admin_Nav.css";
import "./Admin_Navbar.css";
import Swal from "sweetalert2";
import React, { useState } from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import createSvgIcon from '@material-ui/core/utils/createSvgIcon';


const Admin_Nav = () => {
	const navigate = useNavigate();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);


	// const handleProfileClick = (popupState) => {
	// 	popupState.close(); 
	// 	setIsSidebarOpen(true);
	// };


	const handleShowProfile = (popupState) => {
		popupState.close();
		Swal.fire({
			title: "Profile",
			html: `
				<div className="profile-container">
					<div className="avatar-container" style="display: flex; justify-content: center;">
						<img alt="Admin Image" src="https://cdn.vectorstock.com/i/preview-1x/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg" />
					</div>
					<div className="profile-details">
						<p>Admin Name: Admin</p>
						<p>Email: admin123@gmail.com</p>
						<p>Role: Administrator</p>
					</div>
				</div>
			`,
			showCancelButton: true,
			// confirmButtonText: "Logout",
			showConfirmButton: false,
			cancelButtonText: "Close",
		})
			.then((result) => {
				// if (result.isConfirmed) {
				// 	navigate("/login");
				// 	logOut();
				// }
			});
	};
	const logOut = () => {
		navigate('/Login');
	};





	return (
		<>
			


			<div className="container-fluid navbar navbar-expand-lg shadow-sm px-lg-3 py-lg-2 text-light justify-content-between sticky-top" style={{ background: '#191919', marginTop: '-80px' }}>
				<a className="navbar-brand  tw-ml-[28px] fw-bold fs-3 h-font custom-margin-left">
					<img src={logo} alt="" height="80px" width="180px" />
				</a>

				<PopupState variant="popover" popupId="demo-popup-menu">
					{(popupState) => (
						<>
							<AccountCircleIcon
								style={{ color: "#d3a478", height: "36px", width: "36px", marginRight: "20px", marginTop: '5px', cursor: 'pointer', overflowY: 'auto' }}
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


		</>
	);
};

export default Admin_Nav;



