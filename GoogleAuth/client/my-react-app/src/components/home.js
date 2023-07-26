import React, { useContext,useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { UserContext } from './userContext';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const { user,setUser } = useContext(UserContext);
  const navigate=useNavigate()
  
 useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/auth/login/success', {
          withCredentials: true,
        });
       
        console.log(response);
        if (response.data.success===true) {
          setUser(response.data.user);
          
        } 
       
        else if (response.data.success===false){
          navigate("/")
        }
         else {
          console.log('Authentication is failed');
        }
      } catch (error) {
       
        console.error('Error fetching user data:', error);
       
      } 
     
    };
    fetchData();
  }, [setUser,navigate]);  

 if(!user){
  return <h1>loading....</h1>
 }

  return (
    <>
    <div className="p-3">
      <h3 className="text-center bg-success text-light">Profile</h3>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.photos} />
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {user.name}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default HomePage;
