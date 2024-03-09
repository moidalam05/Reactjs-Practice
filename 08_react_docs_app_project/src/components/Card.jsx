import React from 'react';
import { FaFileSignature } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Card({ data, refrence }) {
	return (
		<motion.div
			drag
			dragConstraints={refrence}
			whileDrag={{ scale: 1.2 }}
			dragElastic={0.2}
			className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden'
		>
			<FaFileSignature />
			<p className='text-sm font-semibold leading-tight mt-5'>{data.desc}</p>
			<div className='footer absolute bottom-0 w-full left-0'>
				<div className='flex justify-between items-center px-8 py-3 mb-2'>
					<h5>{data.filesize}</h5>
					<span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
						{data.close ? (
							<IoCloseSharp size='.8rem' color='#fff' />
						) : (
							<FaDownload size='.8rem' color='#fff' />
						)}
					</span>
				</div>
				{data.tag.isOpen && (
					<div
						className={`tag w-full py-4 ${
							data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
						} flex justify-center items-center`}
					>
						<h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
					</div>
				)}
			</div>
		</motion.div>
	);
}

export default Card;
