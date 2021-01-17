import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import {withRouter} from 'react-router';
import ProjectContainer from '../ProjectContainer';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


@observer
class AllProjects extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;

        return(
            <div>
                <Typography variant={"body1"} gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
                    suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos
                    laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <ProjectContainer/>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(AllProjects));
