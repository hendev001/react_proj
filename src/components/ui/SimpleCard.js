import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { MdAddShoppingCart } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    padding: 12,
    margin: 4,
  },
  root1: {
    maxWidth: 475,
    margin: 4,
    "& > *": {
      width: "100",
      marginBottom: 18,
    },
  },
  typ0_h1_1: {
   fontSize: 23,
   fontWeight: 200,
   padding: 15


  },
  img_prop: {
      height: 300
  }
  ,
  card_padding: {
      padding: '5px'

  },
  icon: {
    fontSize: 33,
    marginTop: "12px",
  },
  textfield: {
    width: "100%",
  },
  container: {
    padding: 22,
    display: "flex",
    margin: 4,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  pos1: {
    marginBottom: 40,
  },
});

function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <MdAddShoppingCart />
            <MdShoppingCart />
            UI element
          </Typography>
          <Typography variant="h5" component="h2">
            Card
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            material
          </Typography>
          <Typography variant="body2" component="p">
            Help storing useful infos.
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className={classes.root1}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.pos1}>
            <MdAccountBox className={classes.icon} /> Login Form
          </Typography>{" "}
          <form className={classes.root1} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              className={classes.textfield}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.textfield}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className={classes.textfield}
            />
             <Checkbox color="default" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} label="I agree Terms and Conditions."/>
            
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.textfield}
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card className={classes.root1}>
        <h1 className={classes.typ0_h1_1}>Building the Web</h1>
        <img src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?cs=srgb&dl=pexels-marta-branco-1194713.jpg&fm=jpg" alt="" className={classes.img_prop} />
      </Card>
      <Card className={classes.root1}>
        <h1 className={classes.typ0_h1_1}>Engineer the process</h1>
        <img src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?cs=srgb&dl=pexels-pixabay-256381.jpg&fm=jpg" alt="" className={classes.img_prop} />
        <CardActions>
        <Button size="small" color="primary" variant="contained">Learn More</Button>
        </CardActions>
      </Card>
     
    
    </div>
  );
}

export default SimpleCard;
