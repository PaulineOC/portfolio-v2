import React from 'react';
import { observer } from 'mobx-react';
import {GridList, GridListTile, GridListTileBar, withStyles,} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import ProjectStore from '../../../../stores/ProjectStore';

import {withRouter} from 'react-router';

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

    intro: {
        marginTop: '2px',
        marginBottom:'2px',
        backgroundColor: 'blue',
    },
});


@observer
class ProjectContainer extends React.Component {

    constructor(props){
        super(props);
    }

    handleProjClick(proj){
        ProjectStore.setDetailProject(proj);
    }

    render(){
        const { classes } = this.props;

        //cols 1 in mobile

        return(
            <div>
                <GridList cols={3} cellHeight={250}>
                    {ProjectStore.allProjects.map((proj,ind)=>
                        <GridListTile key= {`${ind}-proj`} >
                            <img src={proj.images[0]}/>
                            <GridListTileBar
                                title={proj.title}
                                subtitle={<span>{proj.categories.join(', ')}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${proj.title}`}
                                                className={classes.icon}
                                                onClick={this.handleProjClick.bind(this,proj)}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    )}
                </GridList>
                </div>
        );
    }
}

export default withRouter(withStyles(styles)(ProjectContainer));
