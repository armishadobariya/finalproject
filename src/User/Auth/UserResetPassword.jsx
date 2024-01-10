import React, { useState } from 'react';
import "./UserResetPassword.css";
import backgroundImage from '../../Assests/Image/home8.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

export const UserResetPassword = () => {

	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setPassword('');
		setCpassword('');
	}
	return (
		<div>
			<div style={{ position: 'relative' }}>
				<img class="w-full md:h-[800px] h-[100vh] " src={backgroundImage} alt="background" srcset="" />
				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}>
				</div>
				<div >
					<div style={{ color: 'white', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
						<div class="grid place-content-center">
							<section className="tw-grid tw-content-center tw-bg-white tw-rounded-sm tw-text-center tw-border-2 md:tw-w-[500px] tw-h-auto tw-p-2 tw-m-3 tw-shadow-md ">

								<div className=" md:tw-p-5">
									<h3 class="tw-text-3xl tw-font-bold  tw-text-black tw-mb-10">
										Reset Password
									</h3>

									<form onSubmit={handleSubmit}>
										{/* <div>
											<div>
												<label className=' tw-text-black tw-p-2 tw-grid tw-justify-start
                                                ' htmlFor='password'>
													Password *
												</label>
												<input
													id='password'
													type="password"
													name="password"
													class="tw-w-full tw-border-2 tw-h-11 tw-p-3 tw-mb-2 tw-rounded-sm"

												/>
											</div>

										</div> */}
										<div className="tw-flex tw-mb-4">
											<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1 ' htmlFor='cpassword'>
												<LockIcon />
											</label>
											<input
												id='cpassword'
												type="password"
												name="password"
												class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 tw-text-black "
												placeholder="Password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>

										<div>
											{/* <div >
												<label className=' tw-text-black tw-p-2 tw-grid tw-justify-start' htmlFor='cpassword'>
													Confirm Password *
												</label>
												<input
													id='cpassword'
													type="password"
													name="confirmPassword"
													class="tw-w-full tw-border-2 tw-h-11 tw-p-3  tw-mb-4 tw-rounded-sm"

												/>
											</div> */}

											<div className="tw-flex tw-mb-4">
												<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1 ' htmlFor='cpassword'>
													<LockIcon />
												</label>
												<input
													id='cpassword'
													type="password"
													name="password"
													class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 tw-text-black"
													placeholder="Confirm Password"
													value={cpassword}
													onChange={(e) => setCpassword(e.target.value)}
												/>
											</div>
											{/* <button type="button" class="tw-bg-black  tw-w-full tw-text-center tw-text-white tw-text-lg tw-font-semibold tw-h-11 tw-mb-3 tw-mt-2 tw-rounded-sm " >
												Reset My Password
											</button> */}
											<button
												disabled={!password || !cpassword}
												type="submit"
												className={`tw-w-full tw-text-center tw-text-lg tw-font-semibold tw-h-11
    												${(!password || !cpassword) ? 'tw-bg-gray-300 tw-cursor-not-allowed tw-text-gray-600' : 'tw-bg-black tw-hover:bg-green-400 tw-text-white'}`}
											>
												Reset My Password
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