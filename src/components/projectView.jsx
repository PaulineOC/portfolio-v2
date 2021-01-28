import React from 'react';
import { Container, Row, Col, Carousel} from 'react-bootstrap';

const renderCarouselItems = (images) => {
	let result = images.map((img, ind)=>{
		return (<Carousel.Item key={ind}>
					<img
				      className="d-block  w-100 img-fluid"
				      src={`${img}`}
				      alt={`img-${ind}`}
				    />
				</Carousel.Item>)
	});
	return result;
}

const projectView = (props) => {
	const {  images, description } = props.project;
	return (
		<Container>
    		<Row>
    			<Col>
    				<Carousel>
    					{renderCarouselItems(images)}
    				</Carousel>
    			</Col>
    		</Row>

			<Row>
	    		<Col>
					<h4>
						{description}
					</h4>
	    		</Col>
			</Row>		
		</Container>
	);
}

export default projectView;