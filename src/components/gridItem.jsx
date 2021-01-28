import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

import '../css/projects.css';


class GridItem extends React.Component{

	constructor(props){
		super(props);

	}
	render(){
		const {item, showOneProject} = this.props;
		return(
			<React.Fragment>
				<Card className="gridCard" onClick={showOneProject.bind(this,item)}>
					<Card.Img className="customResponsiveImg img-responsive" variant="top" src={item.thumbnail}/>
					<Card.Title className="text-center">
						{item.title}
					</Card.Title>
				</Card>
			</React.Fragment>
			
		);

	}
}				

// GridItem.PropTypes = {
// 	item: PropTypes.shape({
// 		title: PropTypes.string,
// 		url: PropTypes.string,
// 		tags: PropTypes.arrayOf(PropTypes.string),
// 		images: PropTypes.arrayOf(PropTypes.string),
// 		thumbnail: PropTypes.string,
// 		description: PropTypes.string,
// 	}).isRequired,
// };

export default GridItem;