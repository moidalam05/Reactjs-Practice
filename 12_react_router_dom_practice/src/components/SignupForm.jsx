import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

const SignupForm = ({ setIsLoggedIn }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [accountType, setAccountType] = useState('student');
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
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
		if (formData.password !== formData.confirmPassword) {
			toast.error('Passwords do not match');
			return;
		}
		setIsLoggedIn(true);
		navigate('/dashboard');
		toast.success('Account created successfully');
	}
	return (
		<div>
			<div className='flex bg-richblack-800 p-1 my-6 gap-x-1 rounded-full max-w-max'>
				<button
					className={`${
						accountType === 'student'
							? 'bg-richblack-900 text-richblack-5'
							: 'bg-transparent text-richblack-200'
					} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={() => {
						setAccountType('student');
					}}
				>
					Student
				</button>
				<button
					className={`${
						accountType === 'instructor'
							? 'bg-richblack-900 text-richblack-5'
							: 'bg-transparent text-richblack-200'
					} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={() => setAccountType('instructor')}
				>
					Instructor
				</button>
			</div>

			<form
				className='flex flex-col w-full gap-y-4 mt-2'
				onSubmit={submitHandler}
			>
				<div className='flex gap-x-4'>
					<label className='w-full'>
						<p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
							First Name<sup className='text-pink-200'>*</sup>
						</p>
						<input
							required
							type='text'
							placeholder='First name'
							name='firstName'
							value={formData.firstName}
							onChange={changeHandler}
							className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[.1px] border-richblack-100'
						/>
					</label>

					<label className='w-full'>
						<p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
							Last Name<sup className='text-pink-200'>*</sup>
						</p>
						<input
							required
							type='text'
							placeholder='Last name'
							name='lastName'
							value={formData.lastName}
							onChange={changeHandler}
							className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[.1px] border-richblack-100'
						/>
					</label>
				</div>

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

				<div className='flex gap-x-4'>
					<label className='w-full relative'>
						<p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
							Create Password<sup className='text-pink-200'>*</sup>
						</p>
						<input
							required
							type={showPassword ? 'text' : 'password'}
							placeholder='Enter Password'
							name='password'
							value={formData.password}
							onChange={changeHandler}
							className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[.1px] border-richblack-100'
						/>
						<span
							className='absolute right-3 top-[40px] cursor-pointer'
							onClick={() => setShowPassword((prev) => !prev)}
						>
							{showPassword ? (
								<AiOutlineEyeInvisible fontFamily={24} fill='#AFB2BF' />
							) : (
								<AiOutlineEye fontFamily={24} fill='#AFB2BF' />
							)}
						</span>
					</label>

					<label className='w-full relative'>
						<p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
							Confirm Password<sup className='text-pink-200'>*</sup>
						</p>
						<input
							required
							type={showConfirmPassword ? 'text' : 'password'}
							placeholder='Confirm password'
							name='confirmPassword'
							value={formData.confirmPassword}
							onChange={changeHandler}
							className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[.1px] border-richblack-100'
						/>
						<span
							className='absolute right-3 top-[40px] cursor-pointer'
							onClick={() => setShowConfirmPassword((prev) => !prev)}
						>
							{showConfirmPassword ? (
								<AiOutlineEyeInvisible fontFamily={24} fill='#AFB2BF' />
							) : (
								<AiOutlineEye fontFamily={24} fill='#AFB2BF' />
							)}
						</span>
					</label>
				</div>

				<button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
					Create Account
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
