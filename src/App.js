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
import PostProperty from './User/Components/PostProperty'



const App = () => {
	return (
		<div>
			<Nav />

			<Routes>
				<Route exact path='/' element={<Home name="Home" />}></Route>
				<Route exact path='/Buy' element={<Buy name="Buy" />} />
				<Route exact path='/Sell' element={<PostProperty name="Sell" />} ></Route>
				<Route exact path='/Features' element={<Features name="Features" />}></Route>
				<Route exact path='/Contact' element={<Contact name="Contact" />}></Route>
				<Route exact path='/About' element={<About name="About" />}></Route>
				<Route exact path='/Feedback' element={<Feedback name="Feedback" />}></Route>
				<Route exact path='/UserRegister' element={<UserRegister
					name="UserRegister" />}></Route>
				<Route exact path='/UserLogin' element={<UserLogin name="UserLogin" />}></Route>
				<Route exact path='/UserForgotPassword' element={<UserForgotPassword name="UserForgotPassword" />}></Route>
				<Route exact path='/UserResetPassword' element={<UserResetPassword name="UserResetPassword" />}></Route>
			</Routes>


			<Footer />


		</div>
	)
}

export default App
