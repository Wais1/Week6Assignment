import { Container, makeStyles, Typography, Box, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ArrowBack, AutorenewTwoTone, Videocam } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  intro: {
    padding: '120px 30px 120px 30px',
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

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.intro}>
        <img className={classes.img} src="/img/Taco-banner.png" alt="" />
      </Box>
      <Link to="/">
       <Button color="primary" className={classes.backButton} variant="contained" size="large"><ArrowBack className={classes.backIcon}/>Go Back</Button>
      </Link>
      <a target="_blank" href="https://drive.google.com/file/d/1lyiSY6lrWUp53cEDtgxSOOe5JYFLTUOK/view"> <Button className={classes.backButton}>  <Videocam className={classes.backIcon}/> Watch</Button> </a>
      <Typography gutterBottom variant="h4">Taco</Typography>
      <Typography variant="subtitle1">App description</Typography>
      <Typography variant="subtitle1">Role: Product Owner</Typography>
      <Typography variant="subtitle1">Team members: 4 Coders, 2 designers</Typography>
      <Typography variant="subtitle1">Tools used: Sketch, designers</Typography>
    </Container>
  );
};

export default Feed;
