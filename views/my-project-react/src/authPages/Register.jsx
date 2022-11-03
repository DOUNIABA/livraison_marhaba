
import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Register(){	
	const validationSchema = Yup.object().shape({
	  
	  name: Yup.string()
		.required('Username is required')
		.min(6, 'Username must be at least 6 characters')
		.max(20, 'Username must not exceed 20 characters'),
	  email: Yup.string()
		.required('Email is required')
		.email('Email is invalid'),
	  password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(40, 'Password must not exceed 40 characters'),
		password2: Yup.string()
		.required('Confirm Password is required')
		.oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
	  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
	});
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	  } = useForm({
		resolver: yupResolver(validationSchema)
	  });

  
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	})
	const {name, email, password,password2} = formData

	const onChange = (e) =>{
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]:e.target.value,
		}))
	}

	const handleApi = (e)=>{
		e.preventDefault();
		console.log(formData);
		axios.post(`http://localhost:4000/api/auth/register`, formData)
		.then(res =>{
			console.log(res)
			alert('success check your email')
			
		}).catch(error =>{
			console.log(error)
		})
	}

  return (
	<>
	<section className='heading'>
		<h1><FaUser />Register</h1>
		
		<p>Please create an account</p>
	</section>
	<section className="form">
		<form onSubmit={handleApi}>
			<div className="form-group">
				<input type="text" className="form-control" id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange}/>
			</div>

			<div className="form-group">
				<input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
			</div>

			<div className="form-group">
				<input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange}/>
			</div>

			<div className="form-group">
				<input type="password" className="form-control" id='password2' name='password2' value={password2} placeholder='Confirm password' onChange={onChange}/>
			</div>

		    <div className="form-grpuo">
				<button type='submit' className='btn btn-block'>Submit</button>
			</div>

			<div className="form-group">
            <Link to='/login'>
                Already have an account?
            </Link>   
			</div> 
		</form>
	</section>
	</>
  )
}

export default Register
