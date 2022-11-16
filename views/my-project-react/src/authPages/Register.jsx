import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Register(){
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
			alert('created successfully! Check your email')
		}).catch(error =>{
			console.log(error)
		})
	}

  return(
	<>
	 <div className="block bg-dark shadow-lg">
	<section className='heading'>
		<h1>Sign Up</h1>
		<p>Please create an account</p>
	</section>
	<form onSubmit={handleApi}>

	<section className="form">
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

		    <div className="form-grpoup">
				<button type='submit' className='btn btn-block'>Submit</button>
			</div>

			<div className="form-group">
            <Link to='/login' className='already text-white'>
                Already have an account?
            </Link>   
			</div> 
		
		<div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none btncolor ">
                      <div className="text-dark px-4 py-6 md:p-12 md:mx-6">
                        <h4 className="text-xl font-semibold mb-6">
                          We are more than just a company
                        </h4>  
                      </div>
                    </div>
	</section>
	</form>
	</div>
	</>
  )
}

export default Register