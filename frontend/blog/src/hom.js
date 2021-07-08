import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl,Card,CardColumns} from 'react-bootstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


const  Hom=()=>{
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
</Navbar><br></br>
<FormControl type="text" placeholder="Search Blogs by title or author" onChange={(e)=>setSearch(e.target.value)} className="mr-sm-2" className="searchbar"/>
<div className="post">

<p className="remove">create posts</p>
 

</div><br></br>

{data.sort((a,b)=>{
    return new Date(b.date) - new Date(a.date);
   
 
 })
 .
filter((s)=>{
  if(s.Title.includes(search) || s.Author.includes(search)){
    return s
  }
})

.map(a=>(
  <div className="container" className="contai">

 
     
      <Container >
  <div>
    
  <Row>
  <Col><CardColumns><Card  variant="top" bg="warning" text="white" border="danger" style={{ width: '30rem' }}>
<Card.Body>
 <Card.Title>{a.Title}</Card.Title><br></br>
 <Card.Subtitle>{a.Author}</Card.Subtitle><br></br>
 <Card.Subtitle>{a.content}</Card.Subtitle><br></br>
 <Card.Subtitle>{a.date}</Card.Subtitle>
</Card.Body>
</Card>
</CardColumns>
</Col>
  </Row>

  </div>
 
</Container>
      </div>
    ))}





    </>


  

     
    )
}
export default Hom