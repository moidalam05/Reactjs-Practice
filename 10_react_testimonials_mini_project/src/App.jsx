import React from 'react';
import Testimonials from './components/Testimonials';
import { reviews } from './assets/data.js';

function App() {
	return (
		<div className='text-white flex flex-col items-center w-full h-screen mx-auto text-center'>
			<h1 className='text-3xl font-bold pt-24'>Our Testimonials</h1>
			<div className='h-1 w-[10rem] bg-red-300 rounded-md mx-auto my-2'></div>
			<Testimonials reviews={reviews} />
		</div>
	);
}

export default App;
