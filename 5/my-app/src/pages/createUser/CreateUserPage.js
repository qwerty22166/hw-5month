import React, {useState} from 'react';
import {Container, Row, Col, Form, Button, Spinner, Alert} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {alertOn, createUserAction} from "../../redux/actions";

function CreateUserPage() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [website, setWebSite] = useState('')

    const {preloader} = useSelector(state => state.preloaderReducer)

    const {text, variant} = useSelector(state => state.alertReducer)

    const dispatch = useDispatch()

    const createUser = () => {
        const userInfo = {
            name,
            username,
            website
        }
        dispatch(createUserAction(userInfo),
        console.log(userInfo))
    }

    return (
        <Container className="py-5">
            <Row>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)}

                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Website"
                            onChange={e => setWebSite(e.target.value)}

                        />
                    </Form.Group>
                </Col>


                <Col lg={3}>
                    <Button variant="success" className="w-100" onClick={createUser}>create user</Button>
                </Col>

                <Col lg={3}>
                    {preloader
                        &&
                        <Spinner animation="border"/>
                        }
                </Col>

                {
                    text
                    &&
                    <Alert variant={variant}>{text}</Alert>
                }
            </Row>


        </Container>
    );
}

export default CreateUserPage;

