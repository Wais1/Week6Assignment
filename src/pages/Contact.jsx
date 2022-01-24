import { Container, makeStyles, Typography, Box, Button } from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
  },
  intro: {
    padding: '120px 30px 120px 30px',
    backgroundColor: 'gray',
    marginBottom: 20,
    color: 'white',
  },
  actionButton: {
    marginRight: 15,
    marginTop: 25,
}
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.intro}>
        <Typography gutterBottom variant="h5">Contact Me</Typography>
        </Box>
        <Link to="/about" style={{ textDecoration: 'none' }}><Button color="primary" variant="contained" size="large" className={classes.actionButton}>About Me</Button></Link> 
        <Link to="/" style={{ textDecoration: 'none' }}><Button color="primary" variant="contained" size="large" className={classes.actionButton}> See My Projects!</Button></Link>
    </Container>
  );
};

export default Contact;
