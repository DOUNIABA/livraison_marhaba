import  React  from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Register  from "./authPages/Register";
import Login from "./authPages/Login"
import Forgotpassword from "./authPages/forgetPassword";
import Manager from "./authPages/Manager";
import Livreur from "./authPages/Livreur";
import Client from "./authPages/Client";

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

          {/* <Route path="/api/user/manager/me" element={<Manager role='manager'/>}/>
          <Route path="/api/user/livreur/me" element={<Livreur role='livreur'/>}/>
          <Route path="/api/user/client/me" element={<Client role='client'/>}/> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
