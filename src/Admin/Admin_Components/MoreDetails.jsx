import React, { useState, useEffect } from 'react'
import Admin_Nav from '../Admin_Nav/Admin_Nav'
import './MoreDetails.css';
import { useNavigate } from 'react-router-dom';
// import h1 from "../../Assests/Image/Admin/Dashboard/TotalProperty/home1.jpg"
import h5 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png";
import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
import "./Common.css";



const MoreDetails = () => {

	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500)
	}, []);
	return (
		<>
			<Admin_Nav />

			<div>


				<div className='sticky-sidebar'>
					<Admin_Sidebar className="" />
				</div>

				{loading ? (
					<div className="loader">
						<div class="spinner"></div>
					</div>
				) : (


					<div class=" tw-my-5 tw-mb-4 tw-px-4 tw-ml-[250px] tw-mt-[100px]">
						<h1 className='tw-text-3xl tw-font-bold tw-mt-14 tw-ml-[40px]'>Anandam Bungalows</h1>
						<div className=' tw-mt-4'>
							<h5 class=" tw-text-gray-500 tw-ml-[40px] tw-flex"><h4 className='tw-cursor-pointer' onClick={() => navigate('/Admin/')}>Dashboard </h4>
								<span class="tw-text-gray-500 tw-ml-[5px] tw-mr-[2px]">  {' >'} </span>
								<h4 className=' tw-cursor-pointer' onClick={() => navigate('/Admin/TotalProperty')}>TotalProperty</h4>
							</h5>

							<div className=' tw-flex'>
								<div className=' tw-mt-10 tw-ml-[40px] tw-me-10'>
									<img src={h5} className=' tw-w-[730px] tw-h-[400px] tw-rounded-sm' alt="" />
								</div>


								<div className=" tw-w-[530px]">
									<div className=" tw-p-3  tw-mt-6 tw-me-10 tw-mb-4 tw-border-0  tw-shadow-lg tw-rounded-md">
										<div className="">
											<h1 className=' tw-font-semibold tw-text-2xl tw-mt-4 tw-ml-4'>₹ 1.13 Cr - 3.20 Cr</h1>
										</div>

										<div >
											<h2 className='tw-font-semibold tw-text-base tw-mt-2 tw-ml-4'>Features</h2>
										</div>

										<div className='tw-flex tw-ml-6'>

											<div className=" tw-me-[10px] tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[65px]">
												<h5 className='font-semibold '>Balcony</h5>
											</div>
											<div className=" tw-text-sm tw-me-[10px] tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
												<h5 className='font-semibold '>Garden</h5>
											</div>
											<div className=" tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
												<h5 className='font-semibold '>Temple</h5>
											</div>
										</div>

										<div >
											<h2 className='tw-font-semibold tw-text-base tw-mt-2 tw-ml-4'>Facilities</h2>
										</div>
										<div className='tw-flex tw-ml-6'>
											<div className=" tw-bg-gray-100 tw-me-[10px] tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[110px]">
												<h5 className='tw-text-sm'><span className='tw-font-semibold '>Locality</span> - Surat</h5>
											</div>
											<div className="  tw-bg-gray-100 tw-me-[10px] tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[99px]">
												<h5 className='tw-text-sm'><span className='tw-font-semibold '>BHK</span> - 6 BHK</h5>
											</div>
											<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[144px]">
												<h5 className='tw-text-sm'><span className='tw-font-semibold '>Type</span> - Luxury House</h5>
											</div>
										</div>
										<div className='tw-flex tw-ml-6'>
											<div className=" tw-bg-gray-100 tw-pl-[7px] tw-me-[10px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[191px]">
												<h5 className='tw-text-sm'><span className='tw-font-semibold '>Main Entrance Facing</span> - East</h5>
											</div>
											<div className=" tw-bg-gray-100  tw-pl-[7px] tw-me-[10px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[141px]">
												<h5 className='tw-text-sm'><span className='tw-font-semibold '>Boundary Hall</span> - No</h5>
											</div>
											<div className=" tw-bg-gray-100  tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[101px]">
												<h5 className='tw-text-sm'><span className='tw-font-semibold '>Parking</span> - Yes</h5>
											</div>
										</div>
										<div className='tw-flex tw-ml-6'>
											<div className=" tw-bg-gray-100 tw-pl-[7px] tw-me-[10px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[121px]">
												<h5 className='tw-text-sm'><span className='tw-font-semibold '>Corner Plot</span> - Yes</h5>
											</div>
										</div>
										<div >
											<h2 className='tw-font-semibold tw-text-base tw-mt-2 tw-ml-4'>Area</h2>
										</div>

										<div className='tw-flex tw-ml-6'>
											<div className=" tw-me-[10px] tw-bg-gray-100  tw-pl-[6px] tw-pr-[8px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[80px]">
												<h5 className='tw-text-sm tw-font-semibold'>1400 sq.ft</h5>
											</div>
										</div>

										<div className=' tw-ml-4 tw-mr-4 tw-mt-4'>
											<button type="submit" class="tw-p-2 tw-w-full tw-cursor-pointer tw-bg-custom-color tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
												Contact Seller</button>
										</div>

									</div>
								</div>
							</div>
						</div>

					</div>
				)}
			</div>

		</>
	)
}

export default MoreDetails;
