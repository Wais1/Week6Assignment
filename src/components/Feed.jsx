import { Container, makeStyles, Typography, Box } from "@material-ui/core";
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
           in psychological safety and an empathetic work culture. I am open minded and attack problems with a naive mindset. I much working to work in teams, however I am capable of accomplishing work alone. 
           Take a look at my work :D</Typography>
        <Typography variant="body1">I created this portfolio with React and Material UI</Typography>
      </Box>
      <Typography gutterBottom variant="h5">My Experience Projects</Typography>
      
      <Post title="Choose the perfect design" img="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Simply Recipes Less Stress. More Joy" img="https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="What To Do In London" img="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </Container>
  );
};

export default Feed;
