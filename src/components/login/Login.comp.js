import React from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

export  const LoginForm=({handleOnChange,handleOnSubmit,email,pass,formSwitcher})=> {

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" onChange={handleOnChange}  name="email" placeholder="Enter Email" value={email}  />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Enter Password" value={pass}  />
                        </Form.Group>

                        <Button type="sumbit">Login</Button>

                    </Form>
                    <hr />
                    <Row>
                    <Col>
                        {/* eslint-disable-next-line  */}
                        <a href="#" onClick={e=>formSwitcher('reset')}>Forget Password?</a>
                    </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

LoginForm.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired,
    formSwitcher:PropTypes.func.isRequired
}