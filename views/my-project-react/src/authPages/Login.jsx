import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
	const [formData, setFormData] = useState({email: '', password: '',})
	const navig=useNavigate()
	const [sucess, setSucess] = useState("");
	const [role, setRole] = useState("");
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

			setFormData("");
			setSucess(true);
			setRole(res.data.role)
		})
		.catch(error =>{
			console.log(error) 
		})
	}

	useEffect(() => {
		if(sucess){
	   if(role === "client"){
		   navig("/client") 
		  } 
		  if (role === "manager"){
			navig("/Manager") 
		   }
		} 
	   else (console.log('err') )
	},[formData]);


   return (
	<>
	<section className='heading'>
		<h1><FaSignInAlt />Login</h1>
		<p>Enter your Information</p>
	</section>
	<section className="form">
		<form onSubmit={handleApi}>
          <p className="text-green-500 font-bold text-center "></p>
			
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
			<div className="form-group">
            <Link to='/forgetPassword'>
               forget your pasword?
            </Link>   
			</div> 

		</form>
	</section>
	</>
  )
}

export default Login
