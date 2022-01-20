import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles((theme)=>({
  button: {
    color:"white",
    backgroundColor: theme.palette.success.dark,
  }
}))

const App = () => {
  const classes = useStyles()
  return <Button variant='contained' size='large' startIcon={<Person />} className={classes.button}>Hello world!</Button>;
};

export default App;