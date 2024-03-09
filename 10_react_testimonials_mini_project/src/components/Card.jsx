import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Card = (props) => {
	let review = props.reviews;
	console.log(review);
	return (
		<div>
			<div className='rounded-md md:relative z-20'>
				<img
					className='w-36 h-36 object-cover absolute -top-16 left-3  rounded-full'
					src={review.image}
					alt='profile-image'
				/>
				<div className='w-36 h-36 bg-red-300 rounded-full absolute -top-[72px] left-[15px] -z-10'></div>
				<div className='pt-16'>
					<h2 className='text-2xl font-semibold'>{review.name}</h2>
					<p className='text-red-300'>{review.jobTitle}</p>
					<div className='pt-8 flex justify-center text-red-300 mb-3'>
						<RiDoubleQuotesL />
					</div>
					<p className='px-14 text-slate-300 text-sm'>{review.description}</p>
					<div className='pb-8 flex justify-center text-red-300 mt-3'>
						<RiDoubleQuotesR />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
