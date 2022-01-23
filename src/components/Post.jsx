import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 15px -12px",
    },
    boxShadow: "rgba(0, 0, 0, 0.10) 3px 2px 8px",
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },

  },
  button: {
    background: '',
    color: '#2E76CF',
    '&:hover': {
      background: theme.palette.primary.main,
      color: 'white',
    },
    margin: theme.spacing(1),
    marginBottom: '10px',
    padding: 12,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 15
  }
}));

const Post = ({ img, title }) => {
  const classes = useStyles();
  return (
    <Link to="/experience" style={{ textDecoration: 'none' }}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <Button size="small" className={classes.button}>
          Check out my work
        </Button>
      </CardActions>
    </Card>
    </Link>
  );
};

export default Post;
