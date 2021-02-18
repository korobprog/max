
import React from 'react';
//import preloader from '../../../assets/images/loading.gif'
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

export default function Preloader() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Skeleton variant="circle" width={100} height={100} />
            <Skeleton variant="text" width={70} height={40} />
            <Skeleton variant="rect" width={150} height={90} />

        </div>
    );
}

