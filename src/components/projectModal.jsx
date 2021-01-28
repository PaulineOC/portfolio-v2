import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Modal, Container, Row, Button, ButtonToolbar, Badge } from 'react-bootstrap';
import ProjectView from './projectView';
import { determinePillColor } from './../utilities/projectTags';

const projectModal = (props) => {
	const { title, url, tags} = props.chosenProj;
		return(
			<Modal
				show={props.show}
				onHide={props.onHide}
				size="lg"
				centered
			>
				{renderHeader(title, tags)}
		    	<Modal.Body>
			    	<ProjectView project={props.chosenProj}/>
		    	</Modal.Body>

      			<Modal.Footer>
      				{renderFooter(url, props.onHide)}
  				</Modal.Footer>
    		</Modal>
		);
};

const renderHeader = (title, tags) => {
	return(
		<Modal.Header closeButton>
			<Container>
				<Row>
		        	<Modal.Title id="contained-modal-title-vcenter">
        				{title}
    				</Modal.Title>
				</Row>
				<Row>
	    			{renderBadges(tags)}
				</Row>
			</Container>
		</Modal.Header>
	);
}

const renderBadges = (tags) => {
	let result = tags.map((item)=>
		<Badge pill variant={determinePillColor(item)}>
			{item}
		</Badge>
	);
	return result;
};

const renderFooter = (url, onHide) => {
	return(
		<ButtonToolbar>
			{!isEmpty(url) && <Button bsPrefix="customBtn" size="lg" href={url} >Go to Project!</Button> }
		    <Button bsPrefix="customBtn" size="lg" onClick={onHide}>Close</Button>
		</ButtonToolbar>
	);
};


export default projectModal;