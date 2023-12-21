import React from 'react';
// import "./UserLogin.css";
import backgroundImage from '../../Assests/Image/home7.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

const UserLogin = () => {
	return (
		<div>
			<div style={{ position: 'relative' }}>
				<img class="w-full md:h-[800px] h-[100vh] " src={backgroundImage} alt="background" srcset="" />
				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.3)' }}>
				</div>
				<div >
					<div style={{ color: 'white', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
						<div class="grid place-content-center">
							<section className="grid content-center bg-white rounded-sm text-center border-2 md:w-[500px] h-auto p-2 m-3 shadow-md ">
								<div className="md:p-10">
									<h3 class="text-3xl font-bold text-black mb-10">
										Log In
									</h3>
									<form>
										<div className="flex">
											<label className='border-2 mr-[2px] text-black p-2 mb-4'>
												<PersonIcon />
											</label>
											<input
												type="email"
												name="email"
												class="w-full border-2 h-12 p-3 mb-4"
												placeholder="Email"
											/>
										</div>
										<div className="flex">
											<label className='border-2 mr-[2px]  text-black p-2 mb-1 '>
												<LockIcon />
											</label>
											<input
												type="password"
												name="password"
												class="w-full border-2 h-12 p-3 mb-1 "
												placeholder="Password"
											/>
										</div>
										<div >
											<a href="/ForgotPassword">Forget Your Password?</a>
											<Link class="text-slate-600  text-sm grid place-content-end mb-6 " style={{ textDecoration: "none" }} to="/UserForgotPassword">Forgot Your Password?</Link>
										</div>
										<button type="button" class="bg-black hover:bg-green-400 hover:text-black  w-full text-center text-white text-lg font-semibold h-11" >
											Login
										</button>
									</form>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserLogin;