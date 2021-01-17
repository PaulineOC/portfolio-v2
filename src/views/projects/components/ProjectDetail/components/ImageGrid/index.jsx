import React from 'react';
import { toJS} from 'mobx';
import { observer } from 'mobx-react';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {
    withStyles,
    Paper,
    useMediaQuery,
    Button,
    Dialog,
    IconButton,
    Grid,
    GridList,
    GridListTile
} from '@material-ui/core';

const styles = (theme) => ({
    // root: {
    //     margin: 0,
    //     padding: theme.spacing(2),
    // },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    mainContainer: {
    }
});

@observer
class ImageGrid extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const { classes, images, featuredImage } = this.props;
        //this.isFullscreen = useMediaQuery(useTheme().breakpoints.down('sm'));
        return(
            <Grid container spacing={2}>
                <Grid item md={6} sm={12}><img src={featuredImage} width="100%"/></Grid>
                <Grid item md={6} sm={12}>
                    <GridList cols={2}>
                        {images.map((img, idx) => (
                            <GridListTile key={img} cols={1}>
                                <img src={img} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
            </Grid>
        );
    }
}

ImageGrid.propTypes = {
    images: PropTypes.array,
    featuredImage: PropTypes.string,
};

ImageGrid.defaultProps = {
    images: [],
    featuredImage: '',
};


export default withStyles(styles)(ImageGrid);
