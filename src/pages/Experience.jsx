import { Container, makeStyles, Typography, Box, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ArrowBack, AutorenewTwoTone, Videocam } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  intro: {
    padding: '0px 0px 0px 0px',
    marginBottom: 20,
    margin: 'auto',
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
      color: 'white',
      background: 'darkgrey',
      boxShadow: '0px 0px 0px 0px',
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
      <Box sx={{ mb: 2  }}>
        {/* Back Button */}
        <Link to="/"style={{ textDecoration: 'none' }}>
          <Button color="primary" className={classes.backButton} variant="contained" size="large"><ArrowBack className={classes.backIcon}/>Go Back</Button>
        </Link>
        {/* Watch Button */}
        <a target="_blank" style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1lyiSY6lrWUp53cEDtgxSOOe5JYFLTUOK/view"> <Button className={classes.backButton}>  <Videocam className={classes.backIcon}/> Watch</Button> </a>
      </Box>
      {/* Main Experience details */}
      <Box sx={{ ml: 2  }}> 
      
      <Typography gutterBottom variant="h4">Taco</Typography>
      <Typography variant="subtitle1">App description</Typography>
      <Typography variant="subtitle1">Role: Product Owner</Typography>
      <Typography variant="subtitle1">Team members: 4 Coders, 2 designers</Typography>
      <Typography variant="subtitle1">Tools used: Sketch, designers</Typography>
      </Box>
    </Container>
  );
};

export default Feed;
