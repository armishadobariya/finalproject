import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAgentDetails.css';
import h5 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png";
import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
import Admin_Nav from '../Admin_Nav/Admin_Nav';
import { getAgentUrl, getUserUrl } from '../../User/Components/Api';
import axios from 'axios';

const AdminAgentDetails = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [agentData, setAgentData] = useState([]);

    const getAgent = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.get(getAgentUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("agent:", response.data.agents);

            if (response.status === 200) {
                const data = response.data.agents;
                console.log('data: ', data);
                setAgentData(data);
            }
        } catch (error) {
            console.error("fetch all property:", error.message);
        }
    }







    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            getAgent();
        }, 500)

    }, []);


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };


    return (
        <>

            <Admin_Nav />

            <div className='sticky-sidebar'>
                <Admin_Sidebar className="" />
            </div>

            {loading ? (
                <div className="loader">
                    <div class="spinner"></div>
                </div>
            ) : (


                <>
                    {/* <div class="container-fluid" id="main-content">
                        <div class="row">
                            <div class="col-lg-10 ms-auto p-4 overfloe-hidden">
                                <h3 class="mb-4 tw-text-2xl tw-font-semibold">USERS INFORMATION</h3>

                                <div class="card border-0 shadow mb-4">
                                    <div class="card-body">

                                        <div class="text-end mb-4">
                                            <input type="text" oninput="search_user(this.value)" class="form-control shadow-none w-25 ms-auto" placeholder="Type to search" />
                                        </div>

                                        <div class="table-responsive">
                                            <table class="table table-hover border text-center">
                                                <thead>
                                                    <tr class="bg-dark text-light" style={{ "backgroundColor": "black", "color": "white" }}>
                                                        <th scope="col">Profile</th>
                                                        <th scope="col">User_Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Created At</th>

                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    {agentData.map((data, index) => (
                                                        <tr style={{ alignItems: "center" }}>
                                                            <td><img src={data.profilePic} alt="" style={{ "borderRadius": "50%", height: "46px", width: "46px" }} /></td>
                                                            <td>{data._id}</td>
                                                            <td>{data.name}</td>
                                                            <td>{data.email}</td>
                                                            <td>{formatDate(data.createdAt)}</td>
                                                        </tr>
                                                    ))}


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> */}
                    <div class="container-fluid" id="main-content">
                        <div class="row">
                            <div class="col-lg-10 ms-auto p-4 overfloe-hidden">
                                <h3 class="mb-4 tw-text-xl tw-font-semibold">AGENTS</h3>

                                <div class="card border-0 shadow mb-4">
                                    <div class="card-body">

                                        <div class="text-end mb-4">
                                            <input type="text" oninput="search_user(this.value)" class="form-control shadow-none w-25 ms-auto" placeholder="Type to search" />
                                        </div>

                                        <div class="table-responsive">
                                            <table class="table table-hover border text-center">
                                                <thead>
                                                    <tr class="bg-dark text-light" style={{ "backgroundColor": "black", "color": "white" }}>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Details</th>
                                                        <th scope="col">Personal Info</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Bank Details</th>
                                                        <th scope="col">Proof</th>
                                                        <th scope="col">Verify</th>

                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    {agentData.map((data, index) => (
                                                        <tr >
                                                            <td>
                                                                <img src={data.profilePic} style={{ "borderRadius": "50%", height: "46px", width: "46px" }} alt="" />
                                                            </td>
                                                            <td>

                                                                <td style={{ display: 'block' }}>{data.name}</td>
                                                                <td style={{ display: 'block' }}>{data.email}</td>
                                                                <td style={{ display: 'inline-block' }}>+91 {data.mobileNo}</td>
                                                            </td>

                                                            <td>

                                                                <td style={{ display: 'block' }}>Age:{data.age}</td>
                                                                <td style={{ display: 'block' }}>Gender:{data.gender}</td>
                                                            </td>
                                                            <td>

                                                                <td style={{ display: 'block' }}>{data.address}</td>
                                                                <td style={{ display: 'block' }}>{data.city}</td>
                                                                <td style={{ display: 'block' }}>{data.state}</td>
                                                            </td>
                                                            <td>
                                                                <td style={{ display: 'block' }}> Bank Name: {data.bankName}</td>
                                                                <td style={{ display: 'block' }}> Ac: {data.bankAccountNo}</td>
                                                                <td style={{ display: 'block' }}> IFSC: {data.ifscCode}</td>

                                                            </td>
                                                            <td>
                                                                <tr style={{ marginBottom: "10px" }}>
                                                                    <td style={{ display: 'block' }}>
                                                                        <span>Adhar Card:</span>
                                                                    </td>
                                                                    <td style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                                                                        <img src={data.aadharCardPic} style={{ height: "35px", width: "46px" }} className="rounded" alt="" />
                                                                    </td>
                                                                    <td>
                                                                        <img src={data.aadharCardPic} style={{ height: "35px", width: "46px" }} className="rounded" alt="" />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ marginTop: "10px" }}>
                                                                    <td style={{ display: 'block' }}>
                                                                        <span>Pan Card:</span>
                                                                    </td>
                                                                    <td style={{ paddingLeft: '0px' }}>
                                                                        <img src={data.panCardPic} style={{ height: "35px", width: "46px" }} className="rounded" alt="" />
                                                                    </td>
                                                                </tr>


                                                            </td>
                                                            <td >
                                                                <button className='bg-black text-white py-1 px-3 pb-2 md:ml-8 rounded md:static font-semibold duration-500'>Verify</button>
                                                            </td>


                                                        </tr>
                                                    ))}






                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>







                </>

            )
            }


        </>
    )
}

export default AdminAgentDetails;

