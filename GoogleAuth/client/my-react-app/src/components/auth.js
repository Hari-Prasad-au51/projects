import React from 'react'
import Button from 'react-bootstrap/Button';


import googlepic from "../images/sign-in-with-google-icon-19.jpg"

const GoogleAuth = () => {
 
  const google=()=>{
    window.open("http://localhost:8000/auth/google","_self")
  }

  return (
    <>
    
    
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border border-success rounded p-3">
        <Button variant="light" className="d-flex justify-content-center align-items-center" onClick={google}>
          <img src={googlepic} alt="google" className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </Button>
      </div>
    </div>
    

    </>
  )
}

export default GoogleAuth