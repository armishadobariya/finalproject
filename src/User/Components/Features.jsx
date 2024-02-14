import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { Footer } from '../Footer/Footer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Features = () => {

	const [isCard, setIsCard] = useState(true);

	const toggleCard = () => {
		console.log("hello");

	}
	return (

		<>
			<Nav />
			<h2>features</h2>
			<div className=''>
				<KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={toggleCard} />
			</div>
			<Footer />
		</>
	)
}

export default Features
