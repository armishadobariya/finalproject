import React from 'react';
import "./UserForgotPassword.css";
import backgroundImage from '../../Assests/Image/home3.avif';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

import PasswordIcon from '@mui/icons-material/Password';

const UserForgotPassword = () => {
	return (
		<div>


			<div style={{ position: 'relative' }}>
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

									<form>
										<div>
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
											<button type="button" class="bg-black mb-4 w-full text-center text-white text-lg font-semibold h-11" >
												Get Otp
											</button>

										</div>

										<div>
											<div className="flex">
												<label className='border-2 mr-[2px] text-black p-2 mb-4'>
													<PasswordIcon />
												</label>
												<input
													type="text"
													name="otp"
													class="w-full border-2 h-12 p-3 mb-4"
													placeholder="Enter Otp"

												/>
											</div>
											<button type="button" class="bg-black  w-full text-center text-white text-lg font-semibold h-11" >
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