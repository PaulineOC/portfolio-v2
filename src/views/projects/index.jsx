import React from 'react';
import { observer } from 'mobx-react';
import {Container, Button, GridList, GridListTile, GridListTileBar, withStyles,} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AllProjects from './components/AllProjects';

// import styles from './menu.module.css'

import {withRouter} from 'react-router';
import ProjectDetail from './components/ProjectDetail';
import ProjectStore from '../../stores/ProjectStore';

// import MainImage from '../../data/images/Title.png';

const styles = theme => ({


});


@observer
class Projects extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;

        return(
            <Container style={{backgroundColor:'#00FF00'}}>
                {ProjectStore.isProjDetailOpen && <ProjectDetail/>}
                <AllProjects/>
            </Container>
        );
    }
}

export default withRouter(withStyles(styles)(Projects));
