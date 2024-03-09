import React from 'react';

function Background() {
	return (
		<>
			<div className='w-full h-screen fixed z-[2]'>
				<div className='absolute top-[5%] w-full py-10 flex justify-center text-xl text-zinc-600 font-semibold'>
					Documents.
				</div>
				<h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter text-[13vw] font-semibold text-zinc-900'>
					Docs
				</h1>
			</div>
		</>
	);
}

export default Background;
