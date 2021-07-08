import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import UserUpdate from './userUpdate';
import Sort from './sortbydate'
import SortWithOut from './sortwithoutdate'


const  UserBlogs=({username,id})=>{
  const [data,setData]=useState([])
 
 

 
  
  const[search,setSearch]=useState([])
  const [date,setDate]=useState([])
 

  axios.get(`http://localhost:3002/newblogs/${username}`)
  .then(res=>{
    setData(res.data)
    
  })
 


  
    return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="primary">
  <Navbar.Brand className="fest" href="#home">Sports Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <div className="search">
    

      </div>
   
    </Nav>
    <Nav>
    <NavDropdown title="Profile" id="collasible-nav-dropdown">
    <Link to ={`/userupdate/${id}`}  >
      
        <NavDropdown.Item href="/userupdate/123"  >Profile</NavDropdown.Item>
        </Link>
    
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Signout</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey={2} href="#memes">
       welcome {username}
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div>
<div className="post">
<Button variant="success" onClick={(e)=>{setDate("sort")}}>Sort by Date</Button>
<Link to ={`/createblog/${id}`}>
<Button variant="success">Create post</Button>
</Link>
 

</div></div><br></br>

<div className="post">

 

</div><br></br>

{
 date ==="sort"?(
  <Sort data={data} search={search}></Sort>
 ):(
  <div>
    <SortWithOut data={data} search={search}></SortWithOut>


    </div>

      
 )
}

  






    </>
     
    )
}
export default UserBlogs