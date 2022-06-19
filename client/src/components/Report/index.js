import { React, useState } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';


function CommentForm(props) {
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    const addReport = (event) => {
        event.preventDefault();

        let time = new Date().toLocaleString();
        let accountID = props.accountID;
        let firstName = props.firstName;
        axios.post('http://localhost:8080/api/users/report', {
            accountID,
            firstName,
            description,
            time,

        }).then((res) => {
            setDescription("");
            console.log("Reported successfully");
            navigate(-1);
        });
    }

    return (
        <div class="ReportForm" className={styles.card}>
            <Card border="dark">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea"
                            value={description}
                            placeholder="Add a report description"
                            onChange={(event) => { setDescription(event.target.value) }}>
                        </Form.Control>
                        <Button className="float-end" variant="danger" onClick={addReport}>Report</Button>
                    </Form.Group>
                </Form>
            </Card>           
        </div >
    );
}

export default CommentForm;