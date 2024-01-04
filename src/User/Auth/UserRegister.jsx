import React, { useState } from 'react';
import './UserRegister.css';
import img2 from '../../Assests/Image/home5.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';



export const UserRegister = () => {
	// const [isHovered, setHovered] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e) => {
		console.log("submitted");
		e.preventDefault();
		setName('');
		setEmail('');
		setPassword('');
		setCpassword('');
		setPhone('');
	}


	return (
		<>
			<div className="relative">
				<div style={{ position: 'relative' }}>

					<img className='h-[130vh] bg-cover w-full' src={img2} alt="" />
					<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>
				</div>
				<div className="absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-cover tw-flex tw-grid tw-items-center tw-justify-center">
					<h5 className=' tw-text-center tw-text-white tw-text-2xl tw-font-semibold'>{'Home>>Register'}</h5>
					<div className="tw-shadow-sm tw-mb-16 tw-m-3 tw-pt-10 tw-pb-11  tw-rounded-md md:tw-w-[700px] " style={{ backgroundColor: "white" }}>
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="user-actions">
									<i className="icofont-login" />
									<span>
									</span>
								</div>
							</div>
						</div>
						<div className="row tw-justify-center">
							<div className="col-lg-10 col-md-10 col-10">
								<form onSubmit={handleSubmit}>
									<div className="billing-details">
										<h3 className="title tw-mb-7 tw-text-2xl tw-font-semibold tw-text-center">Register Details</h3>
										<div className="row">
											<div>
												<GoogleOAuthProvider>
													<GoogleLogin
													/>
												</GoogleOAuthProvider>
											</div>
											<div className="col-md-12">
												<div className="tw-flex tw-mb-4 tw-mt-4">
													<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1' htmlFor='name'>
														<PersonIcon />
													</label>
													<input
														id='name'
														type="name"
														name="name"
														class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 "
														placeholder="Name"
														value={name}
														onChange={(e) => setName(e.target.value)}
													/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="tw-flex tw-mb-4">
													<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1 ' htmlFor='email'>
														<EmailIcon />
													</label>
													<input
														id='email'
														type="email"
														name="email"
														class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 "
														placeholder="Email"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
												</div>
											</div>
											<div className="col-md-6  mb-4">
												<div className="tw-flex ">
													<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1 ' htmlFor='password'>
														<LockIcon />
													</label>
													<input
														id='password'
														type="password"
														name="password"
														class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 "
														placeholder="Password"
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="tw-flex">
													<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1 ' htmlFor='cpassword'>
														<LockIcon />
													</label>
													<input
														id='cpassword'
														type="password"
														name="password"
														class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 "
														placeholder="Confirm Password"
														value={cpassword}
														onChange={(e) => setCpassword(e.target.value)}
													/>
												</div>
											</div>

											<div className="col-md-12  mb-4">
												<div className="tw-flex">
													<label className='tw-border-2 tw-mr-[2px]  tw-text-black tw-p-2 tw-mb-1 ' htmlFor='phn'>
														<PhoneIcon />
													</label>
													<input
														id='phn'
														type="number"
														name="phone"
														class="tw-w-full tw-border-2 tw-h-12 tw-p-3 tw-mb-1 "
														placeholder="Phone"
														value={phone}
														onChange={(e) => setPhone(e.target.value)}
													/>
												</div>
											</div>
											<div className="col-md-12 ">
												<div className="relative group">
													{/* <button
                                                        type="button"
                                                        className={`w-full bg-black text-white h-11 rounded-md button ${isHovered ? 'cursor-pointer' : ''}`}
                                                        onMouseEnter={() => setHovered(true)}
                                                        onMouseLeave={() => setHovered(false)}
                                                    >
                                                        Submit

                                                        {isHovered && (
                                                            <span className="absolute inset-0 bg-green-500 opacity-50 transition-all ease-in-out duration-100 group-hover:opacity-100 z-[-1]"></span>
                                                        )}
                                                    </button> */}
												</div>
												{/* <button type="button" class="tw-bg-black hover:bg-green-400 hover:text-black  tw-w-full tw-text-center tw-text-white tw-text-lg tw-font-semibold tw-h-11" >
													Register
												</button> */}

												<button
													disabled={!name || !email || !password || !cpassword || !phone}
													type="submit"
													className={`tw-w-full tw-text-center tw-text-lg tw-font-semibold tw-h-11
    												${(!name || !email || !password || !cpassword || !phone) ? 'tw-bg-gray-300 tw-cursor-not-allowed tw-text-gray-600' : 'tw-bg-black hover:bg-green-400 tw-text-white'}`}
												>
													Register
												</button>

												<br /> <br />
												<div className='col-lg-12 tw-bg-white tw-h-12 tw-text-green-700  tw-font-semibold tw-text-lg   tw-p-2'><ReadMoreIcon /> Returning Customer?<a href="/UserLogin" className=' tw-text-sm tw-text-black  tw-text-center'>Click here to login</a></div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

				</div>
			</div >
		</>
	);
};