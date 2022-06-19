import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
//import "./App.css";
import image from "../../images/user.jpg";
import { button , Table,Row} from "react-bootstrap";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';

function SearchM() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
       let newval= value.toLowerCase();
        return await axios
          .get(
            `http://localhost:8080/api/users/search/${newval}`
           
          )
          .then((response) =>  setData(response.data))
          .catch((err) => console.log(err));
  };
      

  console.log("data", data);

  const handleReset = () => {
    setValue("");
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    let newval= value.toLowerCase();
    return await axios
    .get(`http://localhost:8080/api/users/search/${newval}`)
    .then((response)=>{
      setData(response.data)
      setValue("");
    })
    .catch((err)=>console.log(err));
  };


 
  return (
    <div class ="container">
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search Name ... "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
<button type="submit" class="btn btn-success">Search</button>
        
        <button type="submit" class="btn btn-primary" onClick={() => handleReset()}>
          Reset
        </button>
      </form>
      <div style={{ marginTop: "100px" }}>
     
 
              {data.length === 0 ? (
                <Table className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      No Data Found
                    </td>
                  </tr>
                </Table>
              ) : (
                data.filter((item)=>item.category==="business").map((item, index) => (
                  
                  <div class="card-deck">
                  <div class="card" className={styles.card}>
   
                  <div class="card-body">  
                 
                     <img src={image} className={styles.image_img} alt="..."/>
                     <h3 class="card-title">{item.firstName+" "+item.lastName}</h3>
                   <Row> <h5>{item.category}</h5></Row> 
                    <Row> <h10>{item.email}</h10></Row>  
                      <button className={styles.button}
                        onClick={() => {navigate(`/view/${item._id}`)}}
                        >View
                        
                    </button>
                       
                  </div>
                  </div>
                  </div>
                ))
              )}
          
 

        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "250px",
            alignContent: "center",
          }}
        >
       
        </div>
      </div>
     
    </div>
  );
  

  
}

export default SearchM;