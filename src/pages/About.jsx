import { Container, makeStyles, Typography, Box, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ArrowBack, AutorenewTwoTone, Videocam } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  intro: {
    padding: '15px 30px 120px 30px',
    backgroundColor: 'gray',
    marginBottom: 20,
    margin: 'auto',
    maxHeight: 500,
    color: 'white',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  backButton: {
    background:'transparent',
    boxShadow: '0px 0px 0px 0px',
    color:'darkgrey',
    padding: '15px 20px 15px 15px',
    '&:hover': {
      color: 'white'
    }
  },
  backIcon: {
    paddingRight: 10,
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.intro}>
      </Box>
      <Link to="/"style={{ textDecoration: 'none' }}>
       <Button color="primary" className={classes.backButton} variant="contained" size="large"><ArrowBack className={classes.backIcon}/>Go Back</Button>
      </Link>
      <Typography gutterBottom variant="h4">About Me</Typography>
      <Typography variant="subtitle1">App description</Typography>
      <Typography variant="subtitle1">Role: Product Owner</Typography>
      <Typography variant="subtitle1">Team members: 4 Coders, 2 designers</Typography>
      <Typography variant="subtitle1">Tools used: Sketch, Figma, XCode / Swift</Typography>
      <Button color="primary" variant="contained" size="large">Contact Me</Button> <Button color="primary" variant="contained" size="large"> See My Projects!</Button>
    </Container>
  );
};

export default About;
