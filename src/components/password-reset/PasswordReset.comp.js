import React from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

export  const ResetPassword=({handleOnChange,handleOnResetSubmit,email,formSwitcher})=> {

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" onChange={handleOnChange}  name="email" placeholder="Enter Email" value={email}  />
                        </Form.Group>

                        <Button type="sumbit">Reset Password</Button>

                    </Form>
                    <hr />
                    <Row>
                    <Col>
                        {/* eslint-disable-next-line  */}
                        <a href="#" onClick={e=>formSwitcher('login')}>Already a User? Sign in</a>
                    </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

ResetPassword.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    formSwitcher:PropTypes.func.isRequired

}