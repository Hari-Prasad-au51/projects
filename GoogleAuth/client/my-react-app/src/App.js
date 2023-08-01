
import { Routes, Route} from "react-router-dom";
import NavigationBar from "./components/navbar";
import HomePage from "./components/home";
import GoogleAuth from "./components/auth";
import loginFailes from "./components/loginFailed"





function App() {
  

  

  
  return (
    <> 
    
      <NavigationBar />
      <Routes>
      <Route path={"/"} element={<GoogleAuth />}  />
     <Route path="/home" element={<HomePage />} />
     <Route path="/login/failed" element={<loginFailes />} />
    </Routes> 
     
    </>
  );
}

export default App;
