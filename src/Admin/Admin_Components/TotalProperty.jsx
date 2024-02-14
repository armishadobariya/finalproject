import React, { useState, useEffect } from 'react';
import img from "../../Assests/Image/Home1/reg_bg.jpeg";
import h1 from "../../Assests/Image/Admin/Dashboard/TotalProperty/home1.jpg";
import h2 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h2.jpeg";
import h3 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h3.jpg";
import h4 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h4.jpg";
import h5 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png";
import Admin_Nav from '../Admin_Nav/Admin_Nav';
import "./TotalProperty.css";
import { useNavigate } from 'react-router-dom';
import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
import "./Common.css";




const TotalProperty = () => {

	const [showMore, setShowMore] = useState(false);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	const moreDetail = () => {
		navigate('/Admin/MoreDetails')
	}


	const handleShowMore = () => {
		setShowMore(!showMore);
	};

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

					<div className=' tw-flex tw-ml-[250px] '>
						<div className=' tw-mt-10'>
							<div class=" tw-w-[360px] tw-ml-[55px] tw-h-[800px] mb-4 border-0 tw-shadow-2xl tw-rounded-md tw-me-10 ">
								<div class="g-0 align-items-center">
									<div class="">
										<img src={h5} height='200px' width='380px' className=' tw-shadow-sm' />
									</div>
								</div >

								<div class=" tw-ml-6 tw-mt-6 ">

									<h4 className=' tw-font-semibold tw-text-xl '>Anandam Bungalows</h4>
									<h2 class=" tw-font-semibold tw-text-lg tw-mb-4 tw-mt-1">₹ 1.13 Cr - 3.20 Cr</h2>

									<div >
										<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Features</h2>
									</div>

									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[65px]">
											<h5 className='font-semibold '>Balcony</h5>
										</div>
										<div className=" tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
											<h5 className='font-semibold '>Garden</h5>
										</div>
									</div>

									<div >
										<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Facilities</h2>
									</div>
									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-bg-gray-100  tw-pl-[6px] tw-pr-[8px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[150px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold tw-text-sm'>Square.Ft</span> - 1400 sq.ft</h5>

										</div>
										<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[110px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>Locality</span> - Surat</h5>

										</div>
									</div>


									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[99px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>BHK</span> - 6 BHK</h5>

										</div>
										<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[144px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>Type</span> - Luxury House</h5>

										</div>
									</div>

									<div className=" tw-bg-gray-100 tw-ml-2 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[191px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Main Entrance Facing</span> - East</h5>
									</div>


									<div className='flex-grow-1'>
										<div className="facilities tw-ml-1">
											<h6 className="tw-mb-3 tw-mt-8 tw-font-semibold">Owner Name</h6>
										</div>
									</div>

									<div className='tw-flex tw-mt-8'>
										<div className=' '>
											<button type="submit" class="tw-p-2 tw-bg-custom-color tw-me-8 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
												Contact Seller</button>

										</div>
										<div className=' '>
											<button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={moreDetail}>
												More Details
											</button>
										</div>
									</div>





								</div>

							</div >
						</div >

						<div className=' tw-mt-10'>
							<div class=" tw-w-[360px] tw-ml-[0px] tw-h-[800px] mb-4 border-0 tw-shadow-2xl tw-rounded-md	 ">
								<div class="g-0 align-items-center">
									<div class="">
										<img src={img} height='300px' width='380px' className=' tw-shadow-sm' />
									</div>
								</div >

								<div class=" tw-ml-6 tw-mt-6">

									<h4 className=' tw-font-semibold tw-text-xl '>Green Green City - Gold</h4>
									<h2 class=" tw-font-semibold tw-text-lg tw-mb-4 tw-mt-1">₹ 85.42 L - 1.13 Cr</h2>

									<div >
										<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Features</h2>
									</div>

									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[65px]">
											<h5 className='font-semibold '>Balcony</h5>
										</div>
										<div className=" tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
											<h5 className='font-semibold '>Garden</h5>
										</div>
									</div>

									<div >
										<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Facilities</h2>
									</div>
									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-bg-gray-100  tw-pl-[6px] tw-pr-[8px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[140px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold tw-text-sm'>Square.Ft</span> - 900 sq.ft</h5>

										</div>
										<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[110px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>Locality</span> - Surat</h5>

										</div>
									</div>


									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[99px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>BHK</span> - 4 BHK</h5>

										</div>
										<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[184px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>Type</span> - Independent House</h5>

										</div>
									</div>

									<div className=" tw-bg-gray-100 tw-ml-2 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[191px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Main Entrance Facing</span> - East</h5>
									</div>


									<div className='flex-grow-1'>
										<div className="facilities tw-ml-1">
											<h6 className="tw-mb-3 tw-mt-8 tw-font-semibold">Owner Name</h6>
										</div>
									</div>

									<div className='tw-flex tw-mt-8'>
										<div className=' '>
											<button type="submit" class="tw-p-2 tw-cursor-pointer tw-bg-custom-color tw-me-8 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
												Contact Seller</button>

										</div>
										<div className=' '>
											<button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={moreDetail}>
												More Details
											</button>
										</div>
									</div>





								</div>

							</div >
						</div >



						<div className=' tw-mt-10'>
							<div class=" tw-w-[360px] tw-ml-[40px] tw-h-[800px] mb-4 border-0 tw-shadow-2xl tw-rounded-md	 ">
								<div class="g-0 align-items-center">
									<div class="">
										<img src={h4} height='300px' width='380px' className=' tw-shadow-sm' />
									</div>
								</div >

								<div class=" tw-ml-6 tw-mt-6">

									<h4 className=' tw-font-semibold tw-text-xl '>Sentosa Heights</h4>
									<h2 class=" tw-font-semibold tw-text-lg tw-mb-4 tw-mt-1">₹ 85.42 L - 1.13 Cr</h2>

									<div >
										<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Features</h2>
									</div>

									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[65px]">
											<h5 className='font-semibold '>Balcony</h5>
										</div>
										<div className=" tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
											<h5 className='font-semibold '>Garden</h5>
										</div>
									</div>

									<div >
										<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Facilities</h2>
									</div>
									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-bg-gray-100  tw-pl-[6px] tw-pr-[8px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[140px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold tw-text-sm'>Square.Ft</span> - 800 sq.ft</h5>

										</div>
										<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[110px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>Locality</span> - Surat</h5>

										</div>
									</div>


									<div className='tw-flex tw-ml-2'>

										<div className=" tw-me-[10px] tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[99px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>BHK</span> - 2 BHK</h5>

										</div>
										<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[124px]">
											<h5 className='tw-text-sm'><span className='tw-font-semibold '>Type</span> - Apartment</h5>

										</div>
									</div>

									<div className=" tw-bg-gray-100 tw-ml-2 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[191px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Main Entrance Facing</span> - East</h5>
									</div>


									<div className='flex-grow-1'>
										<div className="facilities tw-ml-1">
											<h6 className="tw-mb-3 tw-mt-8 tw-font-semibold">Owner Name</h6>
										</div>
									</div>

									<div className='tw-flex tw-mt-8'>
										<div className=' '>
											<button type="submit" class="tw-p-2 tw-bg-custom-color tw-me-8 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
												Contact Seller</button>

										</div>
										<div className=' '>
											<button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={moreDetail}>
												More Details
											</button>
										</div>
									</div>
								</div>
							</div >
						</div >
					</div>
				)}
			</div>

		</>
	)
}

export default TotalProperty
