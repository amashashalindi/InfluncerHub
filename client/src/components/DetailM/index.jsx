import React from 'react';
import {useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Card from 'react-bootstrap/Card';
import {Container,Row,Col,Card,CardGroup} from 'react-bootstrap'
import Login from '../Login';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import image from "../../images/user.jpg";
import styles from "./styles.module.css";



function DetailM() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const loggedInUser = localStorage.getItem("token");
    const navigate = useNavigate();
    


 
   // const category= localStorage.getItem("token");
    useEffect(() => {
        axios.get("http://localhost:8080/api/users/getUsers").then((response) => {
             setListOfUsers(response.data);
        })
    }, [])

//   {listOfUsers.filter((user)=>user.category.includes("Business")).map((user,id) =>
    console.log(listOfUsers)
if(loggedInUser){
      
    return (
      
    
        <div id="allUsers">
            <div className="container" style={{marginTop:"30px"}}>
                        <div
                        className="container"
                        style={{
                            position: "absolute",
                            marginTop: "10px",
                            paddingTop:"5px",
                            paddingBottom:"10px"
                        }}
                        ></div>
            <h1>All Businesses</h1>
    

            {listOfUsers.map((user,id) => {
               if(user.category==="business"){
                return (
                    
                    <React.Fragment>
                        <CardGroup>
                            <Card>
                        <Container fluid="md" className='p-3 mb-2 border border-primary rounded' style={{border:'2px solid #000000', paddingTop:"5px", paddingBottom:"5px" ,paddingLeft:"5px"}} key={user._id}>
                                    
                                    <div class="card-deck">
                  <div class="card" className={styles.card}>
   
                  <div class="card-body">  
                 
                     <img src={image} className={styles.image_img} alt="..."/>
                     <h3 class="card-title">{user.firstName+" "+user.lastName}</h3>
                   <Row> <h5>{user.category}</h5></Row> 
                    <Row> <h10>{user.email}</h10></Row>  
                   <Row>
                    <Col xs={3} md={2}><b> <button className="btn btn-success"
                        onClick={() => {navigate(`/view/${user._id}`)}}
                        >View 
                    </button> </b></Col>
                    </Row>
                  </div>
                  </div>
                  </div>
                                   
                                       
                                   
                                    
                                </Container>
                                </Card>
                        </CardGroup>
                        </React.Fragment>
      





                );
               }
            })}
        </div >
</div >
    );
        }
        else{
            return(
                <div>
                    <Login></Login>
                </div>  
        )
    }
    
};

export default DetailM;