import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Step from './Step';
import '../css/student.css'
import Stepbar from './Stepbar';
// import { Button, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, Redirect } from "react-router-dom";

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


const Student = (props) => {
    const labelArray = ['step 1', 'step 2', 'step 3'];
    const [currentStep, updatecurrentStape] = useState(1);
    function updateStep(step) {
        return updatecurrentStape(step);
    }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    function MoreAboutStudent (){
        // <MoreAboutStudent info={val} />
        // return <Redirect to='MoreAboutStudent'/>
    }

    return (
        <>
            <div key={props.val._id}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">Name: {props.val.name} </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Email:{props.val.email}</Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Phone no:{props.val.phoneNo} </Typography>
                    </CardContent>
                        <Button size="small" onClick={MoreAboutStudent} >Learn More</Button>
                </Card>
            </div>
        </>
    )
}

export default Student;
