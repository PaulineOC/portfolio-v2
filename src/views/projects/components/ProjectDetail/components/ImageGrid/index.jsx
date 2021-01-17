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
    Grid
} from '@material-ui/core';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
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
            <div className={classes.root}>
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item s={12} m={6}>
                            <img src={featuredImage} />
                        </Grid>
                        <Grid item s={12} m={6}>
                            <Grid container spacing={2}>
                                {images.map((img, ind)=>
                                    <Grid item s={12} m={6}>
                                        <img src={img} />
                                    </Grid>
                                )}

                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
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
