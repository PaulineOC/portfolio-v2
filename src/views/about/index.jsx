import React from 'react';
import { observer } from 'mobx-react';
import { Container, Button } from '@material-ui/core';

// import styles from './menu.module.css'

import {withRouter} from 'react-router';

// import MainImage from '../../data/images/Title.png';

@observer
class About extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <p>About Me - nothing</p>
        );
    }
}

export default withRouter(About);
