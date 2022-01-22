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

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 20px 15px -12px",
    },
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },

  },
  button: {
    background: "#f1f1f1",
    '&:hover': {
       background: "#ADD8E6",
    },
    padding: 12,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 15
  }
}));

const Post = ({ img, title }) => {
  const classes = useStyles();
  return (
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
        <Button size="small" color="primary" className={classes.button}>
          Check out my work
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
