
import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	
    const {email, password}=formData
	const onChange = (e) =>{
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]:e.target.value,
		}))
	}
	
	const handleApi = (e)=>{	
		e.preventDefault();
		console.log(formData);
		axios.post(`http://localhost:4000/api/auth/login`, formData)
		.then(res=>{
			localStorage.setItem("token",res.data)
			alert(res.data)
		}).catch(error =>{
			console.log(error)
		})
	}

   return (
	<>
	<section className='heading'>
		<h1><FaSignInAlt />Login</h1>
		<p>Enter your Information</p>
	</section>
	<section className="form">
		<form onSubmit={handleApi}>
			
			<div className="form-group">
				<input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
			</div>

			<div className="form-group">
				<input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange}/>
			</div>

		    <div className="form-group">
				<button type='submit' className='btn btn-block'>Submit</button>
			</div>

             <div className="form-group">
            <Link to='/register'>
                create an account?
            </Link>   
			</div> 

		</form>
	</section>
	</>
  )
}

export default Login
