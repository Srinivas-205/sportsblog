import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl,Card,CardColumns,Carousel} from 'react-bootstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


const  Home=()=>{
  const [data,setData]=useState([])
  const[search,setSearch]=useState([])
  const[date,setDate]=useState("")

  let history =useHistory()
  function getData(){
    axios
    .get("http://localhost:3002/blogs")
    .then(res=>{
      setData(res.data)
    })

  }
 useEffect(getData,[])

 const sortBydate=()=>{
  
 console.log("sorted")
 }


  
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
  
      <Nav.Link className="div"eventKey={2} href="/login">
       Sign in
      </Nav.Link>
      <Nav.Link className="drive" eventKey={2} href="/Register">
       Sign up
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar><br></br>
<Carousel fade>
  <Carousel.Item interval={1800}>
    <img  height="660"
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=800&q=80"
      alt="Welcome to Sports Blog"
    />
    <Carousel.Caption>
      <h1 className="cotent">Welcome to Sports Blog</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="660"
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=800&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <p className="tent">If you want to share your experience or to write a blogs please login to our website<br></br> or<br></br>If you want see our Users recent Blogs click <a href="/hom">here</a></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="660"
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=800&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p className="pad"><strong>About us</strong><br></br>There are many reasons to start a blog for personal use and only a handful of strong ones for business blogging. Blogging for business, projects, or anything else that might bring you money has a very straightforward purpose – to rank your website higher in Google SERPs, a.k.a. increase your visibility.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






    </>


  

     
    )
}
export default Home