
import { Routes, Route} from "react-router-dom";
import NavigationBar from "./components/navbar";
import HomePage from "./components/home";
import GoogleAuth from "./components/auth";





function App() {
  

  

  
  return (
    <> 
    
      <NavigationBar />
      <Routes>
      
      <Route path={"/"} element={<GoogleAuth />}  />
     <Route path="/home" element={<HomePage />} />
    </Routes> 
     
    </>
  );
}

export default App;
