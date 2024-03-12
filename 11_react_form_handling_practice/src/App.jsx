import React, { useState } from 'react';

const App = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		city: 'pick a city',
		gender: '',
        JavaScript: false,
        Python: false,
        React: false,
        message: '',
	});
	const changeHandler = (e) => {
		const { name, type, checked, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }
	return (
		<div className='flex flex-col items-center'>
			<form onSubmit={submitHandler}>
				<label className='label label-text' htmlFor='firstName'>
					First Name:
				</label>
				<input
					className='input input-bordered w-full max-w-md'
					type='text'
					placeholder='First Name'
					name='firstName'
					id='firstName'
					onChange={changeHandler}
					value={formData.firstName}
				/>

				<label className='label label-text' htmlFor='lastName'>
					Last Name:
				</label>
				<input
					className='input input-bordered w-full max-w-md'
					type='text'
					placeholder='Last Name'
					name='lastName'
					id='lastName'
					onChange={changeHandler}
					value={formData.lastName}
				/>

				<label className='label label-text' htmlFor='email'>
					Email Address:
				</label>
				<input
					className='input input-bordered w-full max-w-md'
					type='email'
					placeholder='Email Address'
					name='email'
					id='email'
					onChange={changeHandler}
					value={formData.email}
				/>

				<label className='label label-text' htmlFor='city'>
					City:
				</label>
				<select
					name='city'
					id='city'
					onChange={changeHandler}
					value={formData.city}
					className='select select-bordered w-full max-w-md'
				>
					<option value='pick a city'>pick a city</option>
					<option value='Patna'>Patna</option>
					<option value='Jalandhar'>Jalandhar</option>
					<option value='Gaya'>Gaya</option>
					<option value='Saran'>Saran</option>
				</select>

				<span className='label label-text'>
					Gender:
				</span>
				<div className='flex items-center gap-4'>
					<input
						type='radio'
						name='gender'
						id='male'
						onChange={changeHandler}
						value='male'
						className='radio rad'
					/>
					<label className='label label-text' htmlFor='male'>
						Male
					</label>
				</div>

				<div className='flex items-center gap-4'>
					<input
						type='radio'
						name='gender'
						id='female'
						onChange={changeHandler}
						value='female'
						className='radio'
					/>
					<label className='label label-text' htmlFor='female'>
						Female
					</label>
				</div>

				<span className='label label-text'>
					Skills:
				</span>
				<div className='flex items-center gap-4'>
					<input
						type='checkbox'
						name='Python'
						id='Python'
						onChange={changeHandler}
						checked={formData.Python}
						className='checkbox'
					/>
					<label className='label label-text' htmlFor='Python'>
						Python
					</label>
				</div>

				<div className='flex items-center gap-4'>
					<input
						type='checkbox'
						name='React'
						id='React'
						onChange={changeHandler}
						checked={formData.React}
						className='checkbox'
					/>
					<label className='label label-text' htmlFor='React'>
						React
					</label>
				</div>

				<div className='flex items-center gap-4'>
					<input
						type='checkbox'
						name='JavaScript'
						id='JavaScript'
						onChange={changeHandler}
						checked={formData.JavaScript}
						className='checkbox'
					/>
					<label className='label label-text' htmlFor='JavaScript'>
						JavaScript
					</label>
                </div>
                
                <label className='label label-text' htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    id="message"
                    cols="10"
                    rows="5"
                    className='textarea textarea-bordered w-full max-w-md'
                    onChange={changeHandler}
                    value={formData.message}
                    placeholder='Message...'
                >
                </textarea>

                <button className='btn btn-neutral'>Submit</button>
			</form>
		</div>
	);
};

export default App;
