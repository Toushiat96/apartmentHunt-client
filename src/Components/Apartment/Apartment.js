import React, { useEffect, useState } from 'react';
import './Apartment.css'
import ApertmentData from '../../Data/ApertmentData';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';



const Apartment = () => {
    const [data, setData] = useState([])
    useEffect( () =>{
    fetch('http://localhost:5000/renthome')
    .then(res => res.json())
    .then(data =>setData(data))
    }, [])


    return (
        <div>
            <div className="all-area">
            <center>
                <div className="single-apertment-header">
                    <p>House Rent</p>
                    <h3>
                        Discover the latest Rent
                        available today
                </h3>
                </div>
                </center>
                <div className="row">
                    {
                        data.map(apar => <SingleApart apartment={apar}></SingleApart>)
                    }
                </div>
            </div>

        </div>
    );
};

const SingleApart = (props) => {
    const useStyles = makeStyles({
        root: {
            textAlign: "left",
            height: 355,

        },
        button: {
            textAlign: "right"
        }
    });

    const classes = useStyles();

    const { serviceTitle, image, price, location, bedroom, bathroom , _id } = props.apartment;


    return (
        <div className="col-md-4">
            <div className="">
                <div className="card-style">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={`data:image/png;base64,${image.img}`}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {serviceTitle}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <i class="fas fa-map-marker-alt"></i> {location}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <i class="fas fa-bed"></i> {bedroom}
                                    <br />
                                    <i class="fas fa-bath"></i> {bathroom}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <h3> {price} </h3>
                            <Button size="small" color="primary" >
                                <div className="butt">
                                    <Link to={`/apartment/${_id}`}>
                                        <button className="view">View Details</button>
                                    </Link>
                                </div>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Apartment;