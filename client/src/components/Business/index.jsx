import styles from "./styles.module.css";
import Search from "../Search";
import { Outlet, Link } from "react-router-dom";
import ParseJwt from "../../utilities/ParseJwt";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login';
import { useParams, useNavigate} from "react-router-dom";
import image from "../../images/user.jpg";
//import user from "../../../../server/models/user";
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from "react-bootstrap";


function Business(props) {
    const loggedInUser = localStorage.getItem("token");
    const [fname, setUserName] = useState('');
	const [showfollow,setShowFollow] = useState(null)
   
    const navigate = useNavigate();
		
    useEffect(() => {
		const userToken = localStorage.getItem("token");
        const user = ParseJwt(userToken);
        if(userToken){
		
			const response = axios.get(`http://localhost:8080/api/users/getuser/${user._id}`).then((response) => {
			
            setUserName(response.data.user.businessName);
            
            console.log(response.data);
			
		})
		if(response.staus!=='ok'){
			setUserName('default');
		}
	}
        
       
    }, [])



	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>InfluencerHub</h1>
				<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  {fname} &ensp;
  <img src={image} className={styles.image1_img} alt="..."/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/view">Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>  
  </Dropdown.Menu>
</Dropdown>
  
               

				<button className={styles.white_btn} onClick={() => {navigate(`/login`)}}>
					Logout
				</button>
				
			</nav>
		
            <h2><button className={styles.white_btn1}  onClick={() => {navigate(`/detail`)}}>
					View All influencers
				</button></h2>
			<Search />
	
		</div>
	);
};

export default Business;
