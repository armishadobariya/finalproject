import React from 'react'
import Nav from './User/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './User/Home/Home'
// import Features from './User/Components/Features'
import Contact from './User/Contact/Contact'
import About from './User/About/About'
// import Feedback from './User/Components/Feedback'
import UserRegister from './User/Auth/UserRegister'
import UserLogin from './User/Auth/UserLogin'
import UserForgotPassword from './User/Auth/UserForgotPassword'
import { Footer } from './User/Footer/Footer'
import { UserResetPassword } from './User/Auth/UserResetPassword'
import Dashboard from './Admin/Admin_Components/Dashboard'
import Seller from './Admin/Admin_Components/Seller'
import Buyer from './Admin/Admin_Components/Buyer'
import User_Queries from './Admin/Admin_Components/User_Queries'
import HomeSlide from './User/Home/HomeSlide'
import TotalProperty from './Admin/Admin_Components/TotalProperty'
import MoreDetails from './Admin/Admin_Components/MoreDetails'
import { PropertyList } from './User/AddProperty/PropertyList'
import { PostDetails } from './User/AddProperty/PostDetails'
import { AddProperty } from './User/AddProperty/AddProperty'
import ReadMoreDetails from './User/Buy/ReadMoreDetails'
import Buy from './User/Buy/Buy';
import AdminLogin from './Admin/Auth/AdminLogin'
import Demo from './User/Components/Demo'
import VerifyEmail from './User/Auth/VerifyEmail'
import { PropertyHistory } from './User/Status/PropertyHistory'
<<<<<<< HEAD
import { AgentRegister } from './Agent/AgentRegister'
import Property from './Agent/Property/Property'
import { ReadMore } from '@mui/icons-material'
=======
import UserEmail from './User/Auth/UserEmail'
import { AgentRegister } from './Agent/AgentRegister'
import Rent from './User/Rent/Rent'
import AdminStatus from './Admin/Admin_Components/AdminStatus'



>>>>>>> b0280027273868ab506dff49c3aea9868ab4ec1d
const App = () => {
	return (
		<div>

			<Routes>
				<Route exact path='/' element={<Home name="Home" />}></Route>
				<Route exact path='/Buy' element={<Buy name="Buy" />} />
				<Route exact path='/Rent' element={<Rent name="Rent" />} />
				<Route exact path='/AddProperty' element={<AddProperty name="AddProperty" />} />
				<Route exact path='/Buy/ReadMoreDetails' element={<ReadMoreDetails name="ReadMoreDetails" />} />
				<Route exact path='/PropertyHistory' element={<PropertyHistory name="PropertyHistory" />}></Route>
				<Route exact path='/Contact' element={<Contact name="Contact" />}></Route>
				<Route exact path='/About' element={<About name="About" />}></Route>
				<Route exact path='/UserEmail' element={<UserEmail name="UserEmail" />}></Route>
				<Route exact path='/UserRegister' element={<UserRegister
					name="UserRegister" />}></Route>
				<Route exact path='/VerifyEmail' element={<VerifyEmail
					name="VerifyEmail" />}></Route>
				<Route exact path='/UserLogin' element={<UserLogin name="UserLogin" />}></Route>
				<Route exact path='/UserForgotPassword' element={<UserForgotPassword name="UserForgotPassword" />}></Route>
				<Route exact path='/UserResetPassword' element={<UserResetPassword name="UserResetPassword" />}></Route>

				<Route exact path='/Admin/' element={<Dashboard name="Dashboard" />}></Route>
				<Route exact path='/Admin/AdminLogin' element={<AdminLogin name="AdminLogin" />}></Route>
				<Route exact path='/Admin/Seller' element={<Seller name="Seller" />}></Route>
				<Route exact path='/Admin/Status' element={<AdminStatus name="AdminStatus" />}></Route>
				<Route exact path='/Admin/Buyer' element={<Buyer name="Buyer" />}></Route>
				<Route exact path='/Admin/UserQueries' element={<User_Queries name="UserQueries" />}></Route>
				<Route exact path='/Admin/TotalProperty' element={<TotalProperty name="TotalProperty" />}></Route>
				<Route exact path='/Admin/MoreDetails' element={<MoreDetails name="MoreDetails" />}></Route>

<<<<<<< HEAD

				<Route exact path='/Agent/' element={<AgentRegister name="AgentRegister" />}></Route>
				<Route exact path='/Agent/Property' element={<Property name="Property" />}></Route>
				<Route exact path='/Agent/ReadMore' element={<ReadMore name="ReadMoreDetails" />} />

			</Routes>



=======
				<Route exact path='/Agent/' element={<AgentRegister name="AgentRegister" />}></Route>

			</Routes>

>>>>>>> b0280027273868ab506dff49c3aea9868ab4ec1d


		</div>
	)
}

export default App
