import React, { useState } from 'react';
import './UserRegister.css';
import img2 from '../../Assests/Image/home5.jpg';
// import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReadMoreIcon from '@mui/icons-material/ReadMore';



export const UserRegister = () => {
	const [isHovered, setHovered] = useState(false);

	return (
		<>
			<div className="relative">
				<div style={{ position: 'relative' }}>

					<img className='h-[130vh] bg-cover w-full' src={img2} alt="" />
					<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}>
					</div>
				</div>
				<div className="absolute top-0 left-0 w-full h-full bg-cover flex grid items-center justify-center">
					<h5 className=' text-center text-white text-2xl font-semibold'> Home>>Register</h5>
					<div className="shadow-sm mb-16 m-3 pt-10 pb-11  rounded-sm md:w-[700px] " style={{ backgroundColor: "white" }}>
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="user-actions">
									<i className="icofont-login" />
									<span>
									</span>
								</div>
							</div>
						</div>
						<form>
							<div className="row justify-center">
								<div className="col-lg-10 col-md-10 col-10">
									<div className="billing-details">
										<h3 class="text-3xl font-bold text-center text-black mb-10">
											Register Details
										</h3>

										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<label>
														Name <span className="required">*</span>
													</label>
													<input
														// pattern="[a-zA-Z'-'\s]*"
														required
														type="text"
														// onChange={(e) => onChangeHandler(e)}
														name="name"
														className="form-control"
													/>
													<br />
													{/* {errMsg && !formData?.name && <div className="text-danger mt-2">Name is required!</div>} */}
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label>
														E-mail <span className="required">*</span>
													</label>
													<input
														required
														type="email"
														// onChange={(e) => onChangeHandler(e)}
														name="email"
														className="form-control"
													/> <br />
													{/* {errMsg && !formData?.email && <div className="text-danger mt-2">Email is required!</div>} */}
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Password <span className="required">*</span></label>
													<input
														required
														type="password"
														// onChange={(e) => onChangeHandler(e)}
														name="password"
														className="form-control"
													/> <br />
													{/* {errMsg && !formData?.password && <div className="text-danger mt-2">Password is required!</div>} */}
													{/* {!valid && formData?.password && <div className="text-danger mt-2">Invalid Password!</div>} */}
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>
														Confirm Password <span className="required">*</span>
													</label>
													<input
														required
														type="password"
														// onChange={(e) => onChangeHandler(e)}
														name="c_password"
														className="form-control"
													/>
													<br />
													{/* {errMsg && !formData?.c_password && <div className="text-danger mt-2">Confirm Password is required!</div>} */}
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-group">
													<label>
														Phone
													</label>
													<input
														required
														pattern="[6789][0-9]{9}"
														type="text"
														// onChange={(e) => onChangeHandler(e)}
														name="phone"
														className="form-control"
													/>
													<br />
													<br />
												</div>
											</div>
											<div className="col-md-12 ">
												{/* <button
                                                    type="button"
                                                    className="w-full bg-black text-white h-11 rounded-md button"
                                                // class='btnSubmit'
                                                >
                                                    Submit
                                                </button> */}
												<div className="relative group">
													<button
														type="button"
														className={`w-full bg-black text-white h-11 rounded-md button ${isHovered ? 'cursor-pointer' : ''}`}
														onMouseEnter={() => setHovered(true)}
														onMouseLeave={() => setHovered(false)}
													>
														Submit

														{isHovered && (
															<span className="absolute inset-0 bg-green-500 opacity-50 transition-all ease-in-out duration-100 group-hover:opacity-100 z-[-1]"></span>
														)}
													</button>
												</div>
												<br /> <br />
												<div className='col-lg-12 bg-white h-12 text-green-700  font-semibold text-lg   p-2'>
													<ReadMoreIcon />
													Returning Customer? <a href="/UserLogin" className=' text-sm text-black  text-center'>Click here to login</a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div >
		</>
	);
};
