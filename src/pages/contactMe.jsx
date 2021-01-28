import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isEmpty from 'lodash/isEmpty';
import Card from 'react-bootstrap/Card';



import allProjects from '../projects.js';
import GridItem from '../components/gridItem';
import ProjectModal from '../components/projectModal'; 

class ContactMe extends React.Component{

	render(){
		return(

			<React.Fragment>
				<p>
					Email: ms.rainwater[at]hotmail.com
				</p>
			</React.Fragment>

		);
	}
}

export default ContactMe;


