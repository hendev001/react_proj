import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnGetStarted: {
    border: "1px solid #fff",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <span>Material UI</span>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" className={classes.btnGetStarted}>
              Get Started
            </Button>
          </Typography>
          <Autocomplete
            id="combo-box-demo"
            options={categories}
            getOptionLabel={(option) => option.CategoryName}
            style={{ width: 400 }}
            renderInput={(params) => (
              <TextField {...params} label="Select all" variant="outlined" />
            )}
          />
          <Button color="inherit">Layout</Button>
          <Button color="inherit">Input</Button>
          <Button color="inherit">Navigation</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const categories = [
  {
    CategoryId: 2,
    CategoryName: "Maternity Services",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/2.jpg",
  },
  {
    CategoryId: 3,
    CategoryName: "Weight Loss and Nutrition",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/3.jpg",
  },
  {
    CategoryId: 4,
    CategoryName: "Bone and Joint Health",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/4.jpg",
  },
  {
    CategoryId: 5,
    CategoryName: "Community Education & Wellness",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/5.jpg",
  },
  {
    CategoryId: 6,
    CategoryName: "Women's Health",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/6.jpg",
  },
  {
    CategoryId: 7,
    CategoryName: "Support Groups",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/7.jpg",
  },
  {
    CategoryId: 8,
    CategoryName: "Diabetes Health",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/8.jpg",
  },
  {
    CategoryId: 9,
    CategoryName: "CPR and First Aid",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/9.jpg",
  },
  {
    CategoryId: 10,
    CategoryName: "Community Events",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/10.jpg",
  },
  {
    CategoryId: 17,
    CategoryName: "Virtual Classes",
    PhotoUrl: "https://dclassfindapi.beryl.net/CategoryPhotos/17.jpg",
  },
];

export default Header;
