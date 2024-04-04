import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	function changeHandler(e) {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	}

	const navigate = useNavigate();

	function submitHandler(e) {
		e.preventDefault();
		setIsLoggedIn(true);
		toast.success('Logged in successfully');
		navigate('/dashboard');
	}
	return (
		<form
			className='flex flex-col w-full gap-y-4 mt-6'
			onSubmit={submitHandler}
		>
			<label className='w-full'>
				<p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
					Email Address<sup className='text-pink-200'>*</sup>
				</p>
				<input
					required
					type='email'
					placeholder='Enter your email'
					name='email'
					value={formData.email}
					onChange={changeHandler}
					className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[.1px] border-richblack-100'
				/>
			</label>

			<label className='w-full relative'>
				<p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
					Password<sup className='text-pink-200'>*</sup>
				</p>
				<input
					required
					type={showPassword ? 'text' : 'password'}
					placeholder='Enter your password'
					name='password'
					value={formData.password}
					onChange={changeHandler}
					className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[.1px] border-richblack-100'
				/>
				<span
					className='absolute right-3 top-[42px] cursor-pointer'
					onClick={() => setShowPassword((prev) => !prev)}
				>
					{showPassword ? (
						<AiOutlineEyeInvisible fontFamily={24} fill='#AFB2BF' />
					) : (
						<AiOutlineEye fontFamily={24} fill='#AFB2BF' />
					)}
				</span>
				<Link to='#'>
					<p className='text-xs mt-1 text-blue-100 text-end'>
						Forgot Password?
					</p>
				</Link>
			</label>

			<button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
				Sign In
			</button>
		</form>
	);
};

export default LoginForm;
