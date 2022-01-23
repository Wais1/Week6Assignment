import { Avatar, Container, makeStyles, Paper, rgbToHex, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
  GitHub,
  LinkedIn,
} from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(12),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    borderRadius: '2%',
    "&:hover": {
      backgroundColor: '#d4d4d4'
    },
    padding: '10px 3px 10px 3px',
    margin: '10px 0px 10px 0px',
    [theme.breakpoints.up("sm")]: {
      padding: '10px 8px 10px 8px',
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  profilePic: {
    [theme.breakpoints.down("md")]: {
      display: 'none',
    },
    width: '100%',
    height: 'auto',
    maxWidth: '200px',
    borderRadius:'7%',
    marginBottom: '15px',
  },
  myName: {
    [theme.breakpoints.down("md")]: {
      display: 'none',
    },
    marginBottom: '5px',
  },
  socialIcon: {
    padding: '10px 10px 10px 0px',
    fontSize: '28px',
    color: 'white',
    "&:hover": {
      opacity: 0.7,
    },
    [theme.breakpoints.up("sm")]: {
      color: '#404040',
    },
  }
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper elevation={0} alt="Profile picture">
        <img className={classes.profilePic} src="https://media-exp1.licdn.com/dms/image/D4E35AQG3Bxr7ceTbXg/profile-framedphoto-shrink_200_200/0/1623478818662?e=1642968000&v=beta&t=-2rKJ35xSB7jzo50rRszYZarUnOGvzbjqu2BB0Gn-RI"/>
        <Typography variant="h6" className={classes.myName}>Wais Ibrahim</Typography>
        <Typography variant="subtitle1" className={classes.myName}>Apple Developer Academy Graduate</Typography>
      </Paper>
      {/* Social Icons */}
      <a href="https://github.com/wais1" target="_blank"><GitHub className={classes.socialIcon}/></a>
      <a href="https://www.linkedin.com/in/waisibrahim/" target="_blank"><LinkedIn className={classes.socialIcon}/></a>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
