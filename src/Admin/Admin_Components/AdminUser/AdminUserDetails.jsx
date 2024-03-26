import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import "./AdminAgent/AdminAgentDetails.css"
import "./../AdminAgent/AdminAgentDetails.css";
// import h5 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png";
import Admin_Sidebar from '../../Admin_Nav/Admin_Sidebar';
import Admin_Nav from '../../Admin_Nav/Admin_Nav';
import { getAgentUrl, getUserUrl } from '../../../User/Components/Api';
import axios from 'axios';

const AdminUserDetails = () => {

	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState([]);

	const getUser = async () => {
		try {
			const token = localStorage.getItem('admin');
			const tokenArray = JSON.parse(token);
			const response = await axios.get(getUserUrl, {
				headers: {
					Authorization: `Bearer ${tokenArray[0]}`,
				},
			});
			console.log("response:", response.data.data);

			if (response.status === 200) {
				const data = response.data.data;
				console.log('data: ', data);
				setUserData(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}







	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			getUser();
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
					<div class="container-fluid" id="main-content">
						<div class="row">
							<div class="col-lg-10 ms-auto p-4 overfloe-hidden">
								<h3 class="mb-4 tw-text-2xl tw-font-semibold">USERS INFORMATION</h3>

								<div class="card border-0 shadow mb-4">
									<div class="card-body">

										{/* <div class="text-end mb-4">
                                            <input type="text" oninput="search_user(this.value)" class="form-control shadow-none w-25 ms-auto" placeholder="Type to search" />
                                        </div> */}

										<div class="table-responsive">
											<table className="table table-hover tw-border tw-text-center">
												<thead>
													<tr className=' tw-bg-black'>
														<th scope="col">Profile</th>
														<th scope="col">User_Id</th>
														<th scope="col">Name</th>
														<th scope="col">Email</th>
														<th scope="col">Created At</th>

													</tr>
												</thead>
												<tbody >
													{userData.map((data, index) => (
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
					</div>







				</>

			)
			}


		</>
	)
}

export default AdminUserDetails;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminUserDetails.css';
// import h5 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png";
// import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
// import Admin_Nav from '../Admin_Nav/Admin_Nav';
// import { getUserUrl } from '../../User/Components/Api';
// import axios from 'axios';

// const AdminUserDetails = () => {

//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(true);
//     const [userData, setUserData] = useState([]);

// const getUser = async () => {
//     try {
//         const token = localStorage.getItem('token');

//         const response = await axios.get(getUserUrl, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         console.log("response:", response.data.data);

//         if (response.status === 200) {
//             const data = response.data.data;
//             console.log('data: ', data);
//             setUserData(data);
//         }
//     } catch (error) {
//         console.error("fetch all property:", error.message);
//     }
// }







//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//             getUser();
//         }, 500)

//     }, []);


//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}-${month}-${year}`;
//     };


//     return (
//         <>

//             <Admin_Nav />

//             <div className='sticky-sidebar'>
//                 <Admin_Sidebar className="" />
//             </div>

//             {loading ? (
//                 <div className="loader">
//                     <div class="spinner"></div>
//                 </div>
//             ) : (


//                 <>




//                     <div className=' lg:tw-p-5 lg:tw-ml-[270px] lg:tw-mt-4  tw-mt-6 tw-p-5'>

//                         <div className='tw-grid  shadow-lg lg:tw-p-5 tw-rounded-md '>
//                             <div>
//                                 <div >
//                                     <div className=' tw-flex tw-place-center tw-font-semibold tw-text-2xl'>
//                                         <h1>User Information</h1>
//                                     </div>

//                                 </div>
//                                 <hr className='tw-mt-5' />


//                                 <div class="row tw-px-4 tw-mt-4 ">

//                                     {userData.map((data, index) => (<div class=" col-md-3 tw-mb-4 tw-shadow-lg mt-3">


//                                         <div class=" mb-3 p-1 tw-text-center ">
//                                             <img src={data.profilePic} style={{ height: '100px', width: "100px", borderRadius: '100%' }} className='tw-m-auto' />
//                                             <h1 className='tw-text-xl tw-mt-3 tw-font-semibold'>{data.name}</h1>
//                                             <h1 className='tw-mt-1 tw-text-black'>{data.email}</h1>

//                                             <h1 className='tw-mt-3 tw-font-semibold'>Created At</h1>
//                                             <h1 className='tw-p-[5px]  tw-border-2 tw-mt-1  tw-rounded-2xl ' style={{}}>{formatDate(data.createdAt)}</h1>
//                                         </div>


//                                     </div >
//                                     ))}




//                                 </div >
//                             </div >
//                         </div>
//                     </div>


//                 </>

//             )
//             }


//         </>
//     )
// }

// export default AdminUserDetails;
