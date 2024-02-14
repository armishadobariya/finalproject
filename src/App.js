import React from 'react'
import Nav from './User/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './User/Components/Home'
import Features from './User/Components/Features'
import Contact from './User/Components/Contact'
import About from './User/Components/About'
import Feedback from './User/Components/Feedback'
import { UserRegister } from './User/Auth/UserRegister'
import UserLogin from './User/Auth/UserLogin'
import UserForgotPassword from './User/Auth/UserForgotPassword'
import { Footer } from './User/Footer/Footer'
import { UserResetPassword } from './User/Auth/UserResetPassword'
import Buy from './User/Components/Buy'
import Dashboard from './Admin/Admin_Components/Dashboard'
import Seller from './Admin/Admin_Components/Seller'
import Buyer from './Admin/Admin_Components/Buyer'
import User_Queries from './Admin/Admin_Components/User_Queries'
import HomeSlide from './User/Components/HomeSlide'
import TotalProperty from './Admin/Admin_Components/TotalProperty'
import MoreDetails from './Admin/Admin_Components/MoreDetails'



const App = () => {
	return (
		<div>
			{/* <Nav /> */}

			<Routes>
				<Route exact path='/' element={<Home name="Home" />}></Route>
				<Route exact path='/Buy' element={<Buy name="Buy" />} />
				<Route exact path='/Features' element={<Features name="Features" />}></Route>
				<Route exact path='/Contact' element={<Contact name="Contact" />}></Route>
				<Route exact path='/About' element={<About name="About" />}></Route>
				<Route exact path='/Feedback' element={<Feedback name="Feedback" />}></Route>
				{/* <Route exact path='/HomeSlide' element={<HomeSlide name="HomeSlide" />}></Route> */}
				<Route exact path='/UserRegister' element={<UserRegister
					name="UserRegister" />}></Route>
				<Route exact path='/UserLogin' element={<UserLogin name="UserLogin" />}></Route>
				<Route exact path='/UserForgotPassword' element={<UserForgotPassword name="UserForgotPassword" />}></Route>
				<Route exact path='/UserResetPassword' element={<UserResetPassword name="UserResetPassword" />}></Route>

				<Route exact path='/Admin/' element={<Dashboard name="Dashboard" />}></Route>
				<Route exact path='/Admin/Seller' element={<Seller name="Seller" />}></Route>
				<Route exact path='/Admin/Buyer' element={<Buyer name="Buyer" />}></Route>
				<Route exact path='/Admin/UserQueries' element={<User_Queries name="UserQueries" />}></Route>
				<Route exact path='/Admin/TotalProperty' element={<TotalProperty name="TotalProperty" />}></Route>
				<Route exact path='/Admin/MoreDetails' element={<MoreDetails name="MoreDetails" />}></Route>

			</Routes>


			{/* <Buy /> */}

			{/* <Footer /> */}



		</div>
	)
}

export default App
