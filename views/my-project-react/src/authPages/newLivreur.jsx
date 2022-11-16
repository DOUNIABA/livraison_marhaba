import {useState} from 'react'
import { Link } from 'react-router-dom'
function NewLivreur() {
	const [formData, setFormData] = useState({email: '', password: '',})

	const {email, password}=formData

	const onChange = (e) =>{
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]:e.target.value,
		}))
	}
	
   return (
	<>   
	 <div className="block bg-dark shadow-lg ">
	<section className='heading containe-fluid'>
		<h1>Sign In</h1>
		<p>Enter your Information</p>
	</section>
	<section className="form">

		<form>			
			<div className="form-group">
				<input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
			</div>

			<div className="form-group">
				<input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange}/>
			</div>

		    <div className="form-group">
				<button type='submit' className='btn btn-block'>Submit</button>
			</div>

             <div className="form-group"> Don't have an account?
            <Link to='/register'>
              Sign Up now
            </Link>   
			</div> 

			<div className="form-group">
            <Link to='/forgetPassword'>
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

export default NewLivreur










