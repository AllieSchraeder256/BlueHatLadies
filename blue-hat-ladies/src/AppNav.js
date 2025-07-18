import React, { Component } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const AppNav = () => {
    return (
        <>
        <div>
            <Navbar fixed="top" bg="success">
                <Container fluid>
                    <Navbar.Brand tag={Link} to="/">Blue Hat Ladies</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#">Amazing Link</Nav.Link>
                        <Nav.Link href="#">Another Amazing Link</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        <div style={{ paddingTop: '100px' }}>
            <Outlet/>
        </div>
        </>
    );
}
export default AppNav;