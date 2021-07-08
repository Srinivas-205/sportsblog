import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import { Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";




const Login =()=>{
    const [persons,setPersons]=useState([])
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let history= useHistory()

    useEffect (()=>{
        axios.
        get("http://localhost:3002/show")
        .then(response=>{
            setPersons(response.data)
            console.log(persons)
            console.log(password)
        })
    },[password])

    function handlelogin(e){
         e.preventDefault()
        let person=persons.find(p=>{
            if(p.username==username){
                return p
            }
        })

       if(person.password ==password){
         axios.
         get(`http://localhost:3002/username/${username}`)
         .then(res=>{
         
           console.log(res.data)
           history.push(`/userhome/${res.data.id}`)
         }
     
          )
        
        
       }
       else{
           alert("sdhv")
       }
    }

    function check(){
        if(password.length==0){
            return true
        }
        else{
            return false
        }
    }

    

   
    return( <>
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
    <div className="newlogin">
        <Container >
  
  <Row className="row align-items-end">
    <Col md={12} className="col align-self-center">
    <Form onSubmit={handlelogin
    }>
        <div className="form" bg="warning">
        <h1>Login</h1>
        <br></br>
    <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}} />
  </Form.Group>
<br></br>
  <Form.Group controlId="formBasicPassword">
  
    <Form.Control type="password" placeholder="Enter Password"  onChange={(e)=>{setPassword(e.target.value)}} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree the terms and conditions" />
  </Form.Group>
  {password.length==0?(
      <Button variant="primary" type="submit" disabled >
  
      Submit
    </Button>
    

  )
  :(
    <Button variant="primary" type="submit" >
  
    Submit
  </Button>
  )
}
&emsp;
<a href="/Register">Don't have an account?</a>
  
  </div>
</Form>



    </Col>
   
  </Row>
</Container>
       
     
     
       
    </div>
    </>
)
}




export default Login