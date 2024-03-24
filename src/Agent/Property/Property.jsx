import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from "../../Assests/Image/Home1/reg_bg.jpeg";
import '../AgentRegister.css';
import { useNavigate } from 'react-router-dom';
import AgentNav from '../AgentNav/AgentNav';


const Property = () => {

    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

    const navigate = useNavigate();


    const handleNavbarToggle = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };


    const handleMoreDetail = () => {
        navigate('/Agent/Property/ReadMore')
    }

    return (
        <>

            <AgentNav />
            <div className=' lg:tw-p-10'>
                <div className='tw-grid  shadow-lg lg:tw-p-5 tw-rounded-md '>

                    <div className=' md:flex'>
                        <div class="col-lg-12 col-md-12 px-4">
                            <div class="card mb-4 border-0 shadow">
                                <div class="row g-0 p-3 align-items-center">
                                    <div class="col-md-4 mb-lg-0 mb-md-0 mb-3">
                                        <img src={img} class="img-fluid rounded" />
                                    </div>

                                    <div class="col-md-8 px-lg-3 px-md-3 px-0">
                                        <h2 class=" font-semibold text-xl">₹ 85.42 L - 1.13 Cr</h2>
                                        <h4 className=' font-semibold mb-4'>Green Green City - Gold</h4>
                                        <div className="border bg-light p-3 rounded mb-3">

                                            <div className="features">
                                                <div className='container '>
                                                    <div className='row mb-3'>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Square.Ft</h5>
                                                            800 sq.ft
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Main Entrance Facing</h5>
                                                            East
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Locality</h5>
                                                            Surat
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>BHK</h5>
                                                            2-BHK
                                                        </div>
                                                    </div>


                                                    <div className='row mb-3'>

                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Type</h5>
                                                            Independent House
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Corner Plot</h5>
                                                            Yes
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold'>Boundary Hall</h5>
                                                            No
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold'>Parking</h5>
                                                            Yes
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='d-flex'>
                                            <div className='flex-grow-1'>
                                                <div className="facilities tw-ml-1">
                                                    <h6 className="mb-3">Owner Name</h6>
                                                </div>
                                            </div>

                                            <div className='tw-flex tw-mt-8'>
                                                <div className=' '>
                                                    <button type="submit" class="tw-p-2 tw-bg-custom-color tw-me-2 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
                                                        Contact Seller</button>

                                                </div>
                                                <div className=' '>
                                                    <button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={handleMoreDetail}>
                                                        More Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div >
                    <div className=' md:flex'>
                        <div class="col-lg-12 col-md-12 px-4">
                            <div class="card mb-4 border-0 shadow">
                                <div class="row g-0 p-3 align-items-center">
                                    <div class="col-md-4 mb-lg-0 mb-md-0 mb-3">
                                        <img src={img} class="img-fluid rounded" />
                                    </div>

                                    <div class="col-md-8 px-lg-3 px-md-3 px-0">
                                        <h2 class=" font-semibold text-xl">₹ 85.42 L - 1.13 Cr</h2>
                                        <h4 className=' font-semibold mb-4'>Green Green City - Gold</h4>
                                        <div className="border bg-light p-3 rounded mb-3">

                                            <div className="features">
                                                <div className='container '>
                                                    <div className='row mb-3'>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Square.Ft</h5>
                                                            800 sq.ft
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Main Entrance Facing</h5>
                                                            East
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Locality</h5>
                                                            Surat
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>BHK</h5>
                                                            2-BHK
                                                        </div>
                                                    </div>


                                                    <div className='row mb-3'>

                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Type</h5>
                                                            Independent House
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold tw-mt-2'>Corner Plot</h5>
                                                            Yes
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold'>Boundary Hall</h5>
                                                            No
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <h5 className='font-semibold'>Parking</h5>
                                                            Yes
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='d-flex'>
                                            <div className='flex-grow-1'>
                                                <div className="facilities tw-ml-1">
                                                    <h6 className="mb-3">Owner Name</h6>
                                                </div>
                                            </div>

                                            <div className='tw-flex tw-mt-8'>
                                                <div className=' '>
                                                    <button type="submit" class="tw-p-2 tw-bg-custom-color tw-me-2 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
                                                        Contact Seller</button>

                                                </div>
                                                <div className=' '>
                                                    <button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={handleMoreDetail}>
                                                        More Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div >


                    <br />
                    <br />
                    {/* <Footer /> */}

                </div>
            </div>
        </>

    )
}


export default Property;