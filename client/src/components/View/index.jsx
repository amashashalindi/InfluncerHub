import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardContent from 'react-bootstrap/Card';
import { Container, Row, Col, NavLink } from 'react-bootstrap'
import Login from '../Login';
import { useParams, useNavigate} from "react-router-dom";
import image from "../../images/user.jpg";
import styles from "./styles.module.css";


function View() {
    const loggedInUser = localStorage.getItem("token");
    const [listOfUsers, setListOfUsers] = useState([]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
   const [email, setUserEmail] = useState();
  const [category, setUserCategory] = useState();
  const [showfollow,setShowFollow] = useState(null)
    const { id } = useParams();

    let navigate = useNavigate();

    


    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/getuser/${id}`).then((response) => {
        
            setFirstName(response.data.user.firstName);
            setLastName(response.data.user.lastName);
           setUserEmail(response.data.user.email);
           setUserCategory(response.data.user.category);
           // console.log("ProjectData", res.data.user);
            console.log(response.data);
        })
       
    }, [])

    

    
        return (
        /*   
            <div>
 <h1> HI </h1>
        <h2>firstname: {firstName}</h2>
        <h2>email: {email}</h2>
            </div>
*/

            <div id="allUsers">
                <div className="container" style={{ marginTop: "30px" }}>
                    <div
                        className="container"
                        style={{
                            position: "absolute",
                            marginTop: "10px",
                            paddingTop: "5px",
                            paddingBottom: "10px"
                        }}
                    ></div>
                    
                    

                    <React.Fragment>
                        <Container fluid="md" className='p-3 mb-2 border border-primary rounded' style={{ border: '2px solid #000000', paddingTop: "5px", paddingBottom: "5px", paddingLeft: "5px" }} >
                        <div class="card-deck" className={styles.card_deck}>
                  <div class="card" className={styles.card}>
   
                  <div class="card-body">  
                 
                     <img src={image} className={styles.image_img} alt="..."/>
                     <h3 class="card-title">{firstName+" "+ lastName}</h3>
                   <Row> <h5>{category}</h5></Row> 
                   <Row> <h10>{email}</h10></Row> 
                   <Row><p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. 
                       Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. 
                       This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader 
                       see the organization of the essay and grasp its main points.


                       Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or
                        a single long illustration of a general point. It might describe a place, character, or process; narrate a series 
                        of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. 
                        Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most 
                        important of these is a topic sentence.</p></Row> 
                
                
                  
                    <button className={styles.button1} onClick={() => {navigate(`/report`)}}>
                       Report
                     </button> 
                  </div>
                  </div>
                  </div>

                        </Container>
                    </React.Fragment>



                    </div >
            </div >


                    );

        
    
  

};

export default View;





