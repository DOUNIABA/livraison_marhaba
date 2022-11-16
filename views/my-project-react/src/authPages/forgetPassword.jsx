import { useState } from "react";
import axios from "axios";

function Forgotpassword() {
  const [email, setEmail] = useState({email:""});
  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSucess] = useState("");

  const onchange = (e) => {
    setEmail(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/forgetpassword", email)
      .then((response) => {
        console.log(response)
        setSucess(true);
      
        })
        .catch(function (err) {
         console.log(err.response)
          if (!err.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("password or email incorrect");
          } 
          else {
            setErrMsg(err);
          }
        });
  };

  return (
    <div className="App">
      <header className="App-header">
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
          <div className="container-fluid py-20 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                     
                      <h4 className="text-xl font-semibold mt-1 mb-5 pb-1">
                        Forgot your password{" "}
                      </h4>
                    </div>
                    <div>
                      <form onSubmit={onSubmit}>
                        <p className="text-red-500 font-bold text-center ">
                          {" "}
                          {errMsg}
                        </p>

                        <p className="text-green-500 font-bold text-center ">
                          {sucess}
                        </p>
                        <div>
                          <div className="mb-4">
                            <input
                              type="email"
                              id="email"
                              placeholder='Enter your email'
                              name="email"
                              onChange={onchange}
                              className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                            />
                          </div>
                          
                          <div className="form-grpoup">
                            <button type='submit' className='btn btn-block'>Send Password</button>
                          </div>
                         
                        </div>
                      </form>
                      <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none btncolor ">
                      <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                        <h4 className="text-xl font-semibold mb-6">
                          We are more than just a company
                        </h4>
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
export default Forgotpassword;