import React, { useState } from 'react';
// import "./UserLogin.css";
import backgroundImage from '../../Assests/Image/home7.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';



const UserLogin = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		console.log("submitted");
		e.preventDefault();
		setEmail('');
		setPassword('');
	}

	return (
		<div>
			<div style={{ position: 'relative', marginTop: '-80px' }}>
				<img className="tw-w-full md:tw-h-[800px] tw-h-[100vh] " src={backgroundImage} alt="background" srcset="" />
				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.3)' }}>
				</div>
				<div >

					<div style={{ color: 'white', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
						<div className="tw-grid tw-place-content-center">
							<section className="tw-grid tw-content-center tw-bg-white tw-rounded-sm tw-text-center tw-border-2 md:tw-w-[500px] tw-h-auto tw-p-2 tw-m-3 tw-shadow-md ">
								<form onSubmit={handleSubmit}>
									<div className="md:tw-p-10">
										<h3 className="tw-text-3xl tw-font-bold tw-text-black tw-mb-3 md:tw-mt-[2px] tw-mt-6">
											Log In
										</h3>
										<div className="tw-flex">
											<label className='tw-border-2 tw-mr-[2px] tw-text-black tw-p-2 tw-mb-4 tw-mt-4' htmlFor='email'>
												<PersonIcon />
											</label>
											<input
												id='email'
												type="email"
												name="email"
												className="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-4 tw-text-black tw-mt-4"
												placeholder="Email"
												value={email}
												onChange={e => setEmail(e.target.value)}
											/>
										</div>
										<div className="tw-flex tw-mb-5">
											<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1 ' htmlFor='password'>
												<LockIcon />
											</label>
											<input
												id='password'
												type="password"
												name="password"
												className="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 tw-text-black"
												placeholder="Password"
												value={password}
												onChange={e => setPassword(e.target.value)}
											/>
										</div>
										<div>
											<GoogleOAuthProvider>
												<GoogleLogin
												// onSuccess={async (credentialResponse) => {
												// 	console.log(credentialResponse);
												// 	const data = jwtDecode(credentialResponse.credential)
												// 	console.log(data);
												// }}
												// onError={() => {
												// 	console.log('Login Failed');
												// }}
												/>
											</GoogleOAuthProvider>
										</div>
										<div className=''>
											<input type="checkbox"
												id='remember'
												className='tw-h-3 tw-w-3 md:tw-ml-[-102px]  '
											/>
											<label className=' tw-text-gray-400 p-2 md:tw-ml-1  tw-mt-[10px] ' htmlFor='remember'>
												Remember me</label>
											<a href="/ForgotPassword">Forget Your Password?</a>
											<Link className="text-slate-600  text-sm grid place-content-end mb-6 md:tw-mt-[-30px] tw-mt-[-20px] " style={{ textDecoration: "none" }} to="/UserForgotPassword">Forgot Your Password?</Link>
										</div>
										<div >
										</div>


										{/* <button
											disabled={!email || !password}
											type="submit"
											className={`w-full text-center text-lg font-semibold h-11
    										${(!email || !password) ? 'bg-gray-400 cursor-not-allowed text-gray-600' : 'bg-black hover:bg-green-400'}`}
										>
											Login
										</button> */}
										<button
											disabled={!email || !password}
											type="submit"
											className={`tw-w-full tw-text-center tw-text-lg tw-font-semibold tw-h-11
    												${(!email || !password) ? 'tw-bg-gray-300 tw-cursor-not-allowed tw-text-gray-600' : 'tw-bg-black tw-hover:bg-green-400 tw-text-white'}`}
										>
											Login
										</button>
									</div>
								</form>
							</section>
						</div>
					</div>
				</div >
			</div >
		</div >
	)
}

export default UserLogin;