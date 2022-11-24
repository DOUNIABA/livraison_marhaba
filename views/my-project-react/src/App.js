import  React  from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Register  from "./authPages/Register";
import Login from "./authPages/Login"
import Forgotpassword from "./authPages/forgetPassword";
import Manager from "./authPages/Manager";
import Livreur from "./authPages/Livreur";
import Client from "./authPages/Client";
import Dashboard from "./components/Dashboard";
import ProtectRoute from "./Utils/ProtectRoute";
function App() {
  return (
   <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/client' element={<Client />} />
          <Route path='/manager' element={<Manager />} />
          <Route path='/livreur' element={<Livreur />} />
          <Route path="/forgetpassword" element={<Forgotpassword/>}/>

            {/* private routes */}
          <Route  element={<ProtectRoute/>}>
          <Route path="/Dashboard" element={<Dashboard/>} />
          </Route>

        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
