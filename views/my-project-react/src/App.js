
import  React  from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Register  from "./authPages/Register";
import Login from "./authPages/Login"
import ActivationPage from "./components/ActivationPage"

function App() {
  return (
   <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/api/auth/verify-email/:token' element={<ActivationPage />} /> */}

        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
