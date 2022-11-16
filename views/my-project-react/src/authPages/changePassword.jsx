
import { useState,useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom";

import axios from "axios";
function Resetpassword() {
  const navigate = useNavigate()
  const [formData, setdata] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSucess] = useState("");
const params=useParams();

const onchange = (e) => {
  setdata((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};
  const onSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/api/auth/forgetpassword/${params}`, formData)
      .then((response) => {
        setSucess(true);
      
        })
        .catch(function (err) {
         console.log(err.response)
          if (!err.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("password or data incorrect");
          } 
          
          else {
            setErrMsg(err);
          }
        });
  };

  useEffect(() => {
    if(sucess){
      navigate("/login")
    } 
  
   else (console.log('err') )
  
},[formData]);
  return (
    <div className="App">
      <header className="App-header">
        <section className="h-full btn bg-gray-200 md:h-screen">
          <div className="container-fluid py-20 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                     
                      <h4 className="text-xl font-semibold mt-1 mb-5 pb-1">
                        Rest password{" "}
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
                          <p className="mb-4">Please remember your password   </p>
                          <div className="mb-4">
                            <input
                              type="password"
                              id="password"
                              placeholder="password"
                              name="password"
                              onChange={onchange}
                            // onChange={(e)=>setdata(e.target.value)}

                              className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              id="Cpassword"
                              placeholder="config password"
                              name="Cpassword"
                              onChange={onchange}
                            // onChange={(e)=>setdata(e.target.value)}

                              className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                            />
                          </div>
                    
                          
                          <div className="text-center pt-1 mb-12 pb-1">
                            <button
                              type="submit"
                              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 btncolor"
                            >
                               Send data
                            </button>
                          
                          </div>
                         
                        </div>
                      </form>
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
export default Resetpassword;