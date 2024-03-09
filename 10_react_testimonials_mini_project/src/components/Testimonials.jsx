import React from 'react';
import Card from './Card';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Testimonials = (props) => {
	const [index, setIndex] = React.useState(0);
	let reviews = props.reviews;
	function leftHandler() {
		if (index - 1 < 0) {
			setIndex(reviews.length - 1);
		} else {
			setIndex(index - 1);
		}
	}
	function rightHandler() {
		if (index + 1 > reviews.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	}
	function randomHandler() {
		let randomIndex = Math.floor(Math.random() * reviews.length);
		if (randomIndex === index) {
			randomIndex = index + 1;
		}
		setIndex(randomIndex);
	}
	return (
		<div className='w-[50%] bg-slate-800 mt-14 rounded-md hover:shadow-xl'>
			<Card reviews={reviews[index]} />
			<div>
				<div className='flex justify-center gap-4 text-2xl'>
					<button onClick={leftHandler} className='cursor-pointer'>
						<MdKeyboardArrowLeft />
					</button>
					<button onClick={rightHandler} className='cursor-pointer'>
						<MdKeyboardArrowRight />
					</button>
				</div>
				<button
					onClick={randomHandler}
					className='mb-14 mt-8 px-4 py-2 rounded-md hover:bg-red-400 bg-red-300 duration-200 transition-all'
				>
					Surprise Me
				</button>
			</div>
		</div>
	);
};

export default Testimonials;
