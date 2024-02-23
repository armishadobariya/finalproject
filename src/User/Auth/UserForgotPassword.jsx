import React, { useState } from 'react';
import "./UserForgotPassword.css";
import backgroundImage from '../../Assests/Image/home3.avif';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import 'animate.css';
import PasswordIcon from '@mui/icons-material/Password';
import OtpInput from 'react-otp-input';

const UserForgotPassword = () => {
	const [otp, setOtp] = useState('');


	return (
		<div>


			<div style={{ position: 'relative', marginTop: '-80px' }}>
				<img class="tw-w-full md:tw-h-[800px] tw-h-[100vh] " src={backgroundImage} alt="background" srcset="" />
				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}>
				</div>
				<div >
					<div style={{ color: 'white', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
						<div class="tw-grid tw-place-content-center">
							<section className="tw-grid tw-content-center tw-bg-white tw-text-center tw-border-2 md:tw-w-[500px] tw-h-auto tw-p-2 tw-m-3 tw-shadow-md ">

								<div className=" md:tw-p-[30px]">
									<h3 class="tw-text-3xl tw-font-bold  tw-text-black tw-mb-10">
										Forgot Password
									</h3>

									<form>
										<div>
											<div className="tw-flex">
												<label className='tw-border-2 tw-mr-[2px] tw-text-black tw-p-2 tw-mb-4'>
													<PersonIcon />
												</label>
												<input
													type="email"
													name="email"
													class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-4 tw-text-black"
													placeholder="Email"

												/>
											</div>
											<button type="button" class="tw-bg-black tw-mb-4 tw-w-full tw-text-center tw-text-white tw-text-lg tw-font-semibold tw-h-11" >
												Get Otp
											</button>

										</div>

										<div>
											<div className="tw-grid tw-place-content-center">


												<OtpInput
													value={otp}
													onChange={setOtp}
													numInputs={4}

													renderSeparator={
														<span class="tw-text-black tw-mb-6 tw-p-2 tw-text-2xl">-</span>
													}
													renderInput={(props) =>
														<input {...props}
															class=" tw-border-2 tw-h-[48px] tw-mb-4 tw-w-[48px] tw-text-black"

														/>}
												/>

											</div>
											<button type="button" class="tw-bg-black tw-w-full tw-text-center tw-text-white tw-text-lg tw-font-semibold tw-h-11" >
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