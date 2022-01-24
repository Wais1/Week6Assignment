import { Container, makeStyles, Typography, Box, Button } from "@material-ui/core";
import {Link} from "react-router-dom"
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
  },
  intro: {
    padding: '120px 30px 120px 30px',
    backgroundColor: 'gray',
    marginBottom: 20,
    color: 'white',
  }
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.intro}>
        <Typography gutterBottom variant="h5">Welcome to my website portfolio :)</Typography>
        <Typography variant="body1">I'm a 22 year old Palestinian born individual with an international background.
         I am obsessed with the end to end experience of creating value-adding digital products that positively change the world, or are fun to make.
         I graduated from Apple Developer Academy in December 2020, and since then I have been involved in numerous projects
         creating applications. Explore my experience and add me to your journey! I  love and thrive in collaborative spaces and strongly believe
           in psychological safety and an empathetic work culture. I am open minded and attack problems with a naive mindset. I much prefer working to work in teams, however I am capable of accomplishing work alone. 
           Take a look at my work :D</Typography>
        <Typography variant="body1">I created this portfolio with React and Material UI</Typography>
        <Link to="/about" style={{ textDecoration: 'none' }}><Button>Learn more about me</Button> </Link>
        <Link to="/" style={{ textDecoration: 'none' }}><Button>Begin Exploring!</Button></Link>
      </Box>
      <Typography gutterBottom variant="h5">My Experience Projects</Typography>
      
      <Post title="Taco" img="img/Taco-banner.png"/>
      <Post title="NoDokter" img="img/noDokter-banner.png"/>
      <Post title="ClassApp" img="img/ClassApp-banner.png"/>
      <Post title="SlangTranslate" img="img/slangtranslate-banner.png"/>
      <Post title="SelfWork" img="img/selfwork-banner.png"/>
      <Post title="QuickInvites" img="img/quickinvites-banner.png"/>
      <Post title="DOME" img="img/dome-banner.png"/>
      <Post title="Education" img="img/education-banner.png"/>
      <Post title="Flying Appa Simulator" img="img/appa-banner.png"/>
    </Container>
  );
};

export default Feed;
