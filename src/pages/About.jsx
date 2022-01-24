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
    },
    marginBottom: 10,
  },
  backIcon: {
    paddingRight: 10,
  },
  actionButton: {
      marginRight: 15,
      marginTop: 25,
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
      <Typography variant="subtitle1">I'm a 22 year old Palestinian born individual with an international background.
         I am obsessed with the end to end experience of creating value-adding digital products that positively change the world, or are fun to make.
         I graduated from Apple Developer Academy in December 2020, and since then I have been involved in numerous projects
         creating applications. Explore my experience and add me to your journey! I  love and thrive in collaborative spaces and strongly believe
           in psychological safety and an empathetic work culture. I am open minded and attack problems with a naive mindset. I much working to work in teams, however I am capable of accomplishing work alone. 
           Take a look at my work :D</Typography>
           <Typography variant="subtitle1">Books I've read: :D</Typography>
        <Link to="/contact" style={{ textDecoration: 'none' }}><Button color="primary" variant="contained" size="large" className={classes.actionButton}>Contact Me</Button></Link> 
        <Link to="/" style={{ textDecoration: 'none' }}><Button color="primary" variant="contained" size="large" className={classes.actionButton}> See My Projects!</Button></Link>
    </Container>
  );
};

export default About;
