import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Button,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: 'grey',
    padding: '4px 60px 4px 50px',
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "35%",
    },
    padding: 5,
    paddingLeft: 10,
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  navItem: {
    marginRight: theme.spacing(2),
    background: 'transparent',
    color: 'white',
    boxShadow: '0px 0px 0px 0px',
    '&:hover': {
      boxShadow: '0px 0px 0px 0px',
    },
  },
  contactButton: {
    boxShadow: '0px 0px 0px 0px',
    '&:hover': {
      boxShadow: '0px 0px 0px 0px',
    },
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar elevation={0} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
        <Link to="/" style={{ textDecoration: 'none' }}> <p style={{color: 'white'}}>Wais Ibrahim  </p></Link> 
        </Typography>
        
        <Typography variant="h6" className={classes.logoSm}>
          Wais
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Link style={{ textDecoration: 'none' }} to="/article"><Button variant="contained" color="inherit" className={classes.navItem}>Articles</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/about"><Button variant="contained" color="inherit" className={classes.navItem}>About</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/contact"> <Button color="primary" variant="contained" size="large" className={classes.contactButton}>
            Contact
          </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
