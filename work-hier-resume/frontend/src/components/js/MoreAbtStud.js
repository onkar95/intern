import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, Redirect } from "react-router-dom";
import Stepbar from './Stepbar';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "20px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        textAlign: "start"
    },
    pos: {
        marginBottom: 12,
    },
});


const MoreAbtStud = (props) => {

    const labelArray = ['step 1', 'step 2', 'step 3'];
    const [currentStep, updatecurrentStape] = useState(1);
    function updateStep(step) {
        return updatecurrentStape(step);
    }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">Name: {props.info.name} </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>Class: {props.info.class}</Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>Email:{props.info.email}</Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>City:{props.info.city}</Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>Course:{props.info.course}</Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>Attendence{props.info.attendence}</Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>Phone no:{props.info.phoneNo} </Typography>
                    {/* <Typography className={classes.pos} color="textSecondary">{props.adjective}</Typography> */}
                    <Typography variant="body2" component="p">
                        <Stepbar
                            labelArray={labelArray}
                            currentStep={currentStep}
                            updateStep={updateStep}
                        > </Stepbar>
                        <p>selected state:{currentStep}</p>
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small" onClick={MoreAbtStud(props.info)}>Learn More</Button>
                </CardActions> */}
            </Card>
        </div>
    )
}

export default MoreAbtStud
