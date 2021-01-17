import React from 'react';
import { toJS} from 'mobx';

import { observer } from 'mobx-react';

import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import ImageGrid from './components/ImageGrid';

import {
    withStyles,
    Paper,
    useMediaQuery,
    Button,
    Dialog,
    DialogTitle as MuiDialogTitle,
    DialogContent as MuiDialogContent,
    DialogActions as MuiDialogActions,
    IconButton,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import ProjectStore from '../../../../stores/ProjectStore';
import DetailContents from './components/DetailContents';

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
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h3">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

@observer
class ProjectDetail extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;

        const featuredImg = ProjectStore.currentProjFeaturedPic || ProjectStore.currentProj.thumbnail;

        const { date, categories, skills, technologies, url, description, images  } = toJS(ProjectStore.currentProj);
        //this.isFullscreen = useMediaQuery(useTheme().breakpoints.down('sm'));
        return(
            <Dialog
                onClose={ProjectStore.closeProjectDetail}
                aria-labelledby="project-detail-dialog-title"
                open={ProjectStore.isProjDetailOpen}
                fullScreen={this.fullScreen}
                maxWidth="lg"
            >
                <Paper elevation={6}>
                    <DialogTitle id="project-detail-dialog-title" onClose={ProjectStore.closeProjectDetail}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>

                        <ImageGrid
                            images={images}
                            featuredImage={featuredImg}
                        />
                        <DetailContents
                            date={date}
                            categories={categories}
                            skills={skills}
                            technologies={technologies}
                            url={url}
                            description={description}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={ProjectStore.closeProjectDetail} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Paper>
            </Dialog>
        );
    }

}

export default withStyles(styles)(ProjectDetail);
