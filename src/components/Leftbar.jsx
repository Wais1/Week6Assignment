import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({

}))

const Leftbar = () => {
  const classes = useStyles()
  return <Button variant='contained' size='large' startIcon={<Person />} className={classes.button}>Hello world!</Button>;
};

export default Leftbar;