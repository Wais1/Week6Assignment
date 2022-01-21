import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({

}))

const Feed = () => {
  const classes = useStyles()
  return <Button variant='contained' size='large' startIcon={<Person />} className={classes.button}>Hello world!</Button>;
};

export default Feed;