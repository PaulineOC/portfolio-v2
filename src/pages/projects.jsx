import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isEmpty from 'lodash/isEmpty';


import allProjects from '../projects.js';
import GridItem from '../components/gridItem';
import ProjectModal from '../components/projectModal'; 

class Projects extends React.Component{

	constructor(props){
		super(props);
		this.renderGrid = this.renderGrid.bind(this);
		this.state = {
			showProject: false,
			chosenProj: {},
		}
		this.showOneProject = this.showOneProject.bind(this);
		this.hideOneProject = this.hideOneProject.bind(this);
	}

	showOneProject(proj){
		this.setState ({
			showProject: true,
			chosenProj: proj,
		});
	}

	hideOneProject(){
		this.setState({
			showProject: false,
			chosenProj: {},
		});
	}

	/* Sort By: (on the front end?)
	- Date Created 
	- Alphabetically

	Filter By: (on the front end?)
	- Tag
	*/

	renderGrid(arr, showModal){
		let result = [];
		for(var i=0;i<=arr.length/3;i++){
			let data = [];
			for(var j= i*3;j<i*3+3 && j<arr.length;j++){
				data.push(
					 <Col className="py-2" md="4" key={`${i}-${j}`}>
						<GridItem item={arr[j]} showOneProject={showModal}/>
					 </Col>
				);
			}

			result.push(
				<Row className="hidden-md-up" key={i}>
					{data}
				</Row>);
		}

		return result;
	}

	renderModal(showModal, chosenProject ){
		if(!isEmpty(chosenProject)){
			return(
				<Row>
					<ProjectModal
						show={showModal}
						onHide={this.hideOneProject}
						chosenProj={chosenProject}
	    			/>
				</Row>
			);
		}
		return null;
	}

	render(){
		const {showProject, chosenProj} = this.state;
		return(
			<Container>
				<Row>{this.renderGrid(allProjects, this.showOneProject)}</Row>
				{this.renderModal(showProject, chosenProj)}
			</Container>
		);
	}
}




export default Projects;


