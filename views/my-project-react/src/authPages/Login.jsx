
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
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
		   else if(role === "livreur"){
			navig("/Livreur")
		   }
		} 
	   else (console.log('err') )
	},[formData]);

   return (
	<>   
	 <div className="block bg-dark shadow-lg ">
	<section className='heading containe-fluid'>
		<h1>Sign In</h1>
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

             <div className="form-group text-white"> Don't have an account?
            <Link to='/register' className='already text-danger'>
              Sign Up now
            </Link>   
			</div> 

			<div className="form-group">
            <Link to='/forgetPassword' className='already text-white'>
               forgot your pasword?
            </Link>   
			</div> 

		</form>
		<div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none btncolor ">
                      <div className="text-dark px-4 py-6 md:p-12 md:mx-6">
                        <h4 className="text-xl font-semibold mb-6">
                          We are more than just a company
                        </h4>
                        
                      </div>
                    </div>
	</section>
	</div>
	
	</>
  )
}

export default Login










