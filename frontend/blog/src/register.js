import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useEffect, useState} from 'react';
import crud from './services/crud'
import Notification from './notification';
import {Container,Row,Col,Form,Group,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'
import Login from './login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

function Register() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [phonenumber,setPhonenumber]=useState("")
    const [password,setPassword]=useState("")
    const [err,setErr]=useState(null)

    const [type,setType]=useState("")
    const [repeat,setRepeat]=useState("")
    const [p,setP]=useState("")
    let history =useHistory()

  
    function handle(e){
      e.preventDefault()
      console.log(err)
      const user={
        username,
        email,
        phonenumber,
        password
      }
  
    axios.post("http://localhost:3002/users",user)
    .then(p=>{
      console.log(p)
      setErr("successs")
      setType("success")

     
    })
      
     
      .catch(error =>{
        if(error.name ==='TypeError'){
          console.log(error.response.data.error);
          setErr("username exists")
          setType("danger")
          
          
  
        }
        else{
          console.log(error.response.data.error)
          setErr(error.response.data.error)
          setType("danger")
          
          
        }
      })

     
    }
   

   
       
  
  
   
  
    
  
   
    return(
     <>
    <Navbar collapseOnSelect expand="lg" bg="primary">
  <Navbar.Brand className="fest" href="/">Sports Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <div className="search">
      

      </div>
   
    </Nav>
    <Nav>
  
      <Nav.Link className="div"eventKey={2} href="/login">
       Sign in
      </Nav.Link>
      <Nav.Link className="drive" eventKey={2} href="/Register">
       Sign up
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <div className="main">

         
         
    
    
                

                            <Container fluid="sm" >
                            
                                
                            <Row >
                           
                            <Form onSubmit={handle}>
                            <Notification err={err} type={type} setErr={setErr} setType={setType}></Notification>
                            <div className="form"> 
                            
                            <h1>User Registration</h1><br></br>
                            <Form.Group controlId="formBasicText1">
                                <Form.Control type="text" onChange={(e) =>{setUsername(e.target.value)}}  placeholder="Enter username" />
                            
                            </Form.Group>
                            <br></br>
                            
                             <Form.Group controlId="formBasicText">
                                <Form.Control type="text" onChange={(e) =>{setPhonenumber(e.target.value)
                                if(phonenumber.length<9){
                                    setP("phonenumber must contain 10 digits")
                                }
                                else{
                                    setP("")
                                }}}  placeholder="Enter phonenumber" />
                                <Form.Text className="text-muted">
                               {p}
                                </Form.Text>
                            
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="email" onChange={(e) =>{setEmail(e.target.value)}}  placeholder="Enter email" />
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" onChange={(e) =>{setPassword(e.target.value)
                                if(password.length<2){
                                    setPassword("Weak password")
                                } 
                                else{
                                    setPassword("Strong password")
                                }}}  placeholder="Enter password" />
                                <Form.Text className="text-muted">
                               {password}
                                </Form.Text>
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" onChange={(e)=>{
                                    if(e.target.value!=password){
                                        setRepeat("passwords doesnt match")
                                    }
                                    else{
                                        setRepeat("")
                                    }
                                }} placeholder="renter-Password" />
                                <Form.Text className="text-muted">
                                {repeat}
                                </Form.Text>
                            </Form.Group>
                            {
                                password.length==0 ?(
                                    <Button variant="primary" type="submit" disabled>
                                    Submit
                                </Button>

                                )
                                :
                                (
                                    <Button variant="primary" type="submit" >
                                     
                                     

                                    Submit
                                </Button>
                                )
                            }
                            &emsp;
                                  <a href="/Login">Already have an account?</a>
                            

                           
                            </div> 
                            </Form>
                            </Row>
                            
                            </Container>
          

      
      </div>
      </>
    )
   
     
  }
  
  export default Register;