import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../css/venn.css';
import img1 from '../imgs/img1.PNG';
import img2 from '../imgs/img2.JPG';
import img3 from '../imgs/img3.PNG';
import img4 from '../imgs/img4.PNG';
import img5 from '../imgs/img5.PNG';

class Venn extends React.Component{

	render(){
		return(
            <Row className="img-containers">
                <Col sm={3} className="img-container" style={{"background-image": `url(${img1})`}}>
                </Col>
                <Col sm={3} className="img-container" style={{"background-image": `url(${img2})`}}>
                </Col>
                <Col sm={3} className="img-container" style={{"background-image": `url(${img3})`}}>
                </Col>
                <Col sm={3} className="img-container" style={{"background-image": `url(${img5})`}}>
                </Col>
            </Row>
        );
	}
}

export default Venn;


