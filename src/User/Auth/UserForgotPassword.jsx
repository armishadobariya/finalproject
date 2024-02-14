import React, { useState } from 'react';
import "./UserForgotPassword.css";
import backgroundImage from '../../Assests/Image/home3.avif';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

import PasswordIcon from '@mui/icons-material/Password';

const UserForgotPassword = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail('');
		setPassword('');
	}

	return (
		<div>


			<div style={{ position: 'relative', marginTop: '-80px' }}>
				<img class="w-full md:h-[800px] h-[100vh] " src={backgroundImage} alt="background" srcset="" />
				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}>
				</div>
				<div >
					<div style={{ color: 'white', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
						<div class="grid place-content-center">
							<section className="grid content-center bg-white text-center rounded-sm border-2 md:w-[500px] h-auto p-2 m-3 shadow-md ">

								<div className=" md:p-10">
									<h3 class="text-3xl font-bold  text-black mb-10">
										Forgot Password
									</h3>

									<form onSubmit={handleSubmit}>
										<div>
											<div className="flex">
												<label className='border-2 mr-[2px] text-black p-2 mb-4' htmlFor='email'>
													<PersonIcon />
												</label>
												<input
													id='email'
													type="email"
													name="email"
													class="w-full border-2 h-12 p-3 mb-4 tw-text-black"
													placeholder="Email"
													value={email}
													onChange={e => setEmail(e.target.value)}

												/>
											</div>
											{/* <button type="button" class="bg-black mb-4 w-full text-center text-white text-lg font-semibold h-11" >
												Get Otp
											</button> */}

											<button
												disabled={!email}
												type="submit"
												className={`tw-w-full tw-text-center tw-text-lg tw-font-semibold tw-h-11 tw-mb-6
    												${(!email) ? 'tw-bg-gray-300 tw-cursor-not-allowed tw-text-gray-600' : 'tw-bg-black tw-hover:bg-green-400 tw-text-white'}`}
											>
												Get Otp
											</button>

										</div>

										<div>
											<div className="flex">
												<label className='border-2 mr-[2px] text-black p-2 mb-4' htmlFor='otp'>
													<PasswordIcon />
												</label>
												<input
													id='otp'
													type="text"
													name="otp"
													class="w-full border-2 h-12 p-3 mb-4 tw-text-black"
													placeholder="Enter Otp"
													value={password}
													onChange={e => setPassword(e.target.value)}

												/>
											</div>
											{/* <button type="button" class="bg-black  w-full text-center text-white text-lg font-semibold h-11" >
												Reset Password
											</button> */}

											<button
												disabled={!password}
												type="submit"
												className={`tw-w-full tw-text-center tw-text-lg tw-font-semibold tw-h-11
    												${(!password) ? 'tw-bg-gray-300 tw-cursor-not-allowed tw-text-gray-600' : 'tw-bg-black tw-hover:bg-green-400 tw-text-white'}`}
											>
												Reset Password
											</button>

										</div>













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

export default UserForgotPassword;