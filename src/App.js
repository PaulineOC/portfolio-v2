import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';

import VennExample from './pages/vennExample';
import Projects from './pages/projects';
import ContactMe from './pages/contactMe';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function ControlledTabs() {
    const [key, setKey] = useState('home');
    return (
        <Tab.Container defaultActiveKey="home">
            <Row id="navrow">
                <Col>
                    <Nav variant="pills purple">
                        <Nav.Item id="nav-home">
                            <Nav.Link eventKey="home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item id="nav-projects">
                            <Nav.Link eventKey="projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item id="nav-contact">
                            <Nav.Link eventKey="contact">Contact Me</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col id="header-name">
                    Pauline Okuda Ceraulo
                </Col>
            </Row>
            <Container>
                <Tab.Content>
                    <Tab.Pane eventKey="home">
                        <VennExample/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="projects">
                        <Projects/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="contact">
                        <ContactMe/>
                    </Tab.Pane>
                </Tab.Content>
            </Container>
        </Tab.Container>
    );
}


function App() {
    return (
        <ControlledTabs/>
    );
}

export default App;
