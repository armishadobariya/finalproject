import React from 'react';
import "./PostProperty.css";
import HouseIcon from '@mui/icons-material/House';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DescriptionIcon from '@mui/icons-material/Description';

// import bg from "../../Assets/Image/reg_bg1.jpg";
import bg from "../../Assests/Image/form_bg.jpg";

const PostProperty = () => {

	const descLeave = () => {
		document.getElementById('description').style.color = 'black';
		document.getElementById('circle-container').style.background = '#d3a478';
	};

	const descEnter = () => {
		document.getElementById('description').style.color = 'white';
		document.getElementById('circle-container').style.background = 'black';

	};

	const photoLeave = () => {
		document.getElementById('photo').style.color = 'black';
		document.getElementById('photo-container').style.background = '#d3a478';
	};

	const photoEnter = () => {
		document.getElementById('photo').style.color = 'white';
		document.getElementById('photo-container').style.background = 'black';

	};


	const homeLeave = () => {
		document.getElementById('house').style.color = 'black';
		document.getElementById('house-container').style.background = '#d3a478';
	};

	const homeEnter = () => {
		document.getElementById('house').style.color = 'white';
		document.getElementById('house-container').style.background = 'black';

	};




	return (
		<div>

			<div style={{ position: 'relative' }}>
				<img class="w-full  rounded-bottom-5" src={bg} alt="background" srcset="" />
				<div >
					{/* <div style={{ color: 'black', width: '100%', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }} className=' tw-h-full'> */}

					<div className=' flex place-content-center p-md-5 container text-md'>

						<div className="faq-contact m-5 shadow-lg p-3 bg-white rounded-5 p-md-5 " >


							<h2 className=' text-2xl font-bold text-center text-3xl'>Posting Your Property </h2>
							<form id="contactForm" className='p-md-5'>
								<div className="row  mt-4">
									<div className="col-lg-12 col-md-12 mt-4 flex  ">
										<div class="form-check">
											<input class="form-check-input" type="radio" name="why" id="exampleRadios1" value="option1" />
											<label class="form-check-label mr-6" for="exampleRadios1">
												Sell
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="why" id="exampleRadios2" value="option2" />
											<label class="form-check-label" for="exampleRadios2">
												Buy
											</label>
										</div>

									</div>
									<div className="col-lg-12 col-md-12 mt-4 ">
										<div className="form-group-lg">
											<textarea
												name="message"
												className="form-control text-md"
												id="message"
												cols={30}
												rows={4}
												required=""
												data-error="Write your message"
												placeholder="Address"
												defaultValue={""}
											/>
											<div className="help-block with-errors" /><br />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
											<input
												type="text"
												name="city"
												id="city"
												className="form-control h-12 text-md"
												required=""
												data-error="Please enter your city"
												placeholder="city"

											/>
											<br />
											<div className="help-block with-errors" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<input
												type="text"
												name="Locality"
												id="locality"
												className="form-control h-12 text-md"
												required=""
												data-error="Please enter your Locality"
												placeholder="Locality"
											/>
											<br />
											<div className="help-block with-errors" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<input
												type="varchar"
												name="size"
												id="size"
												className="form-control h-12 text-md"
												required=""
												data-error="Please enter your size"
												placeholder="Size(sq.ft)"

											/>
											<br />
											<div className="help-block with-errors" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<input
												type="number"
												name="price"
												id="price"
												className="form-control h-12 text-md"
												required=""
												data-error="Please enterproperty price "
												placeholder="price"

											/>
											<br />
											<div className="help-block with-errors" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<input
												type="number"
												name="property_age"
												id="property_age"
												className="form-control h-12 text-md"
												required=""
												data-error="Please enter your age of property"
												placeholder="Property (In year)"
											/>
											<br />
											<div className="help-block with-errors" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<select
												name="project_type"
												id="project_type"
												required=""
												data-error="Please select your project type"
												className="form-control h-12 text-md"
												placeholder=""
											>
												<option value="" selected >Project Type</option>
												<option value="Apartments" >Apartments</option>
												<option value="Independent House" >Independent House</option>
												<option value="Luxury" >Luxury</option>
												<option value="Affordable House" >Affordable House</option>
											</select>
											<div className="help-block with-errors" />
										</div><br />
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<select
												name="facing"
												id="facing"
												required=""
												data-error="Please select your Facing"
												className="form-control h-12 text-md"

											>
												<option value="" selected>Facing</option>
												<option value="North" >North</option>
												<option value="East" >East</option>
												<option value="West" >west</option>
												<option value="South" >South</option>
											</select>
											<div className="help-block with-errors" />
										</div><br />
									</div>


									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<select
												name="bhk_type"
												id="bhk_type"
												required=""
												data-error="Please select Bhk Type"
												className="form-control h-12 text-md"

											>
												<option value="" selected>BHK_Type</option>
												<option value="1BHK" >1BHK</option>
												<option value="2BHK" >2BHK</option>
												<option value="3BHK" >3BHK</option>
												<option value="3+BHK" >3+BHK</option>
											</select>
											<div className="help-block with-errors" />
										</div><br />
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<select
												name="bathroom"
												id="bathroom"
												required=""
												data-error="Please select number of Bathroom"
												className="form-control h-12 text-md"

											>
												<option value="" selected>Bathroom</option>
												<option value="1" >1</option>
												<option value="2" >2</option>
												<option value="3" >3</option>
												<option value="4" >4</option>
											</select>
											<div className="help-block with-errors" />
										</div>
									</div>

									<div className="col-lg-12 col-md-12 mt-4 flex ">
										<label htmlFor="">Facility</label>
									</div>

									<div className="col-lg-12 col-md-12 mt-2 flex ">
										<div className="col-lg-3 col-md-3 ">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
												<label class="form-check-label  " for="flexCheckDefault">
													Parking
												</label>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 ">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
												<label class="form-check-label" for="flexCheckDefault">
													Lift
												</label>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 ">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
												<label class="form-check-label" for="flexCheckDefault">
													Gas Pipline
												</label>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 ">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
												<label class="form-check-label" for="flexCheckDefault">
													Garden
												</label>
											</div>
										</div>

									</div>

									<div className="col-lg-12 col-md-12 mt-4 flex ">
										<label htmlFor="">Furnished</label>
									</div>

									<div className="col-lg-12 col-md-12 mt-2 flex ">
										<div className="col-lg-4 col-md-4  ">
											<div class="form-check">
												<input class="form-check-input" type="radio" name="furnished" id="exampleRadios1" value="unfurnished" />
												<label class="form-check-label" for="exampleRadios1">
													Un-Furnished
												</label>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 ">
											<div class="form-check">
												<input class="form-check-input" type="radio" name="furnished" id="exampleRadios1" value="semifurnished" />
												<label class="form-check-label" for="exampleRadios1">
													Semi-Furnished
												</label>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-4 ">
											<div class="form-check">
												<input class="form-check-input" type="radio" name="furnished" id="exampleRadios1" value="fullyfurnished" />
												<label class="form-check-label" for="exampleRadios1">
													Fully-Furnished
												</label>
											</div>
										</div>
									</div>

									<div className="col-lg-12 col-md- mt-4">
										<div class="input-group-lg  mb-3">
											<div class="custom-file mr-6">
												<input type="file" multiple class="custom-file-input  border-2 w-100 rounded-2 " id="inputGroupFile02" />
												{/* <label class="custom-file-label" for="inputGroupFile02">Choose file</label> */}
											</div>

										</div>
									</div>



									<div className="col-lg-12 col-md- mt-2">
										<div className="form-group-lg">
											<input
												type="number"
												name="contact_no"
												id="contact_no"
												className="form-control h-12 text-md"
												required=""
												data-error="Please enter your Contact number"
												placeholder="Contact No"
											/>
											<br />
											<div className="help-block with-errors" />
										</div>
									</div>


									<div className="col-lg-12 col-md-4">
										<div className="form-group">
											<input
												type="email"
												name="email"
												id="email"
												className="form-control h-12 text-md"
												required=""
												data-error="Please enter your email"
												placeholder="Email"
											/>
											<br />
											<div className="help-block with-errors" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 text-center">
										<button type="submit" className='border-2 p-2 bg-black text-white w-40 font-semibold'>
											Post
										</button>
										<div id="msgSubmit" className="h3 text-center hidden" />
										<div className="clearfix" />
									</div>
								</div>
							</form>
						</div>

					</div>

					<div>
						<div className='text-center'>
							<div className='tw-flex tw-items-center tw-justify-center tw-mt-8'>
								<div className='lg:tw-w-[240px] tw-w-20 tw-border-b-2' style={{ border: '0px solid #d3a478' }}></div>
								<h6 class="mb-2 tw-text-lg font-bold md:tw-mr-5 md:tw-ml-5" >HOW TO POST</h6>
								<div className='lg:tw-w-[240px] tw-w-20 tw-border-b-2' style={{ border: '0px solid #d3a478' }}></div>
							</div>
							<p className='tw-text-center tw-text-6xl-text-6xl mt-2 mb-5 ' style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px' }}>Post Your Property in 3 Simple Steps
							</p>
						</div>
						<div className="lg:tw-flex lg:tw-p-20 ">
							<div className="p-3 tw-justify-center m-3 lg:tw-ml-20 lg:tw-w-[500px]  tw-border tw-border-1 tw-border-grey sm:w-full tw-rounded-sm">
								<div
									id='circle-container'
									className='tw-mt-[-48px] tw-flex tw-justify-center tw-items-center tw-shadow-2xl tw-m-auto '
									style={{
										border: '6px solid white',
										borderRadius: '50%',
										height: '90px',
										width: '90px',
										background: '#d3a478',
										transition: 'background 0.3s',
									}}
									onMouseEnter={descEnter}
									onMouseLeave={descLeave}
								>
									<div>
										<DescriptionIcon
											id='description'
											className='tw-h-12 tw-w-10'
											style={{
												color: 'black',
												transition: 'color 0.3s',
												cursor: 'pointer',
											}}
										/>
									</div>
								</div>
								<h1 className='tw-mt-[30px] tw-mb-[20px] tw-font-semibold tw-text-2xl tw-text-center'>01.Add Details of your property</h1>
								<div className='tw-font-normal tw-text-md tw-text-center tw-mb-5 tw-text-gray-500'>Begin by telling us the few basic details about your property like your property type, location, No. of rooms etc</div>
							</div>


							<div className="p-3 tw-justify-center m-3 lg:tw-w-[500px]  tw-border tw-border-1 tw-border-grey sm:w-full tw-rounded-sm">

								<div
									id='photo-container'
									className='tw-mt-[-48px] tw-flex tw-justify-center tw-items-center tw-shadow-2xl tw-m-auto '
									style={{
										border: '6px solid white',
										borderRadius: '50%',
										height: '90px',
										width: '90px',
										background: '#d3a478',
										transition: 'background 0.3s',
									}}
									onMouseEnter={photoEnter}
									onMouseLeave={photoLeave}
								>
									<div>
										<AddAPhotoIcon
											id='photo'
											className='tw-h-12 tw-w-10'
											style={{
												color: 'black',
												transition: 'color 0.3s',
												cursor: 'pointer',


											}}
										/>
									</div>
								</div>

								<h1 className='tw-mt-[30px] tw-mb-[20px] tw-font-semibold tw-text-2xl tw-text-center'>02.Upload Photos & Videos</h1>
								<div className='tw-font-normal tw-text-md tw-text-gray-500 tw-text-center tw-mb-5'>Upload photos and videos of your property either via your desktop device or from your mobile phone</div>
							</div>

							<div className="p-3 tw-justify-center m-3 lg:tw-mr-20  lg:tw-w-[500px]  tw-border tw-border-1 tw-border-grey sm:w-full tw-rounded-sm">

								<div
									id='house-container'
									className='tw-mt-[-48px] tw-flex tw-justify-center tw-items-center tw-shadow-2xl tw-m-auto '
									style={{
										border: '6px solid white',
										borderRadius: '50%',
										height: '90px',
										width: '90px',
										background: '#d3a478',
										transition: 'background 0.3s',
									}}
									onMouseEnter={homeEnter}
									onMouseLeave={homeLeave}
								>
									<div>
										<HouseIcon
											id='house'
											className='tw-h-12 tw-w-10'
											style={{
												color: 'black',
												transition: 'color 0.3s',
												cursor: 'pointer',


											}}
										/>
									</div>
								</div>
								<h1 className='tw-mt-[30px] tw-mb-[20px] tw-font-semibold tw-text-2xl tw-text-center'>03.Add Pricing & Ownership</h1>
								<div className='tw-font-normal tw-text-md tw-text-gray-500 tw-text-center tw-mb-14'>Just update your property’s ownership details and your expected price and your property is ready for posting</div>
							</div>
						</div>

					</div>
					{/* </div> */}

				</div>
			</div>

		</div >


	)
}

export default PostProperty;