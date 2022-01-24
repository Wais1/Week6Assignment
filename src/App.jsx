import { Grid, makeStyles } from "@material-ui/core";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import ScrollToTop from "./components/ScrollToTop";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
        <BrowserRouter>
        <ScrollToTop />
            <Navbar />
            <Grid container>
              <Grid item sm={2} xs={2}>
                <Leftbar />
              </Grid>
              <Grid item sm={7} xs={10}>
                <Routes> 
                  <Route path="/" element={<Feed />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/article" element={<Article />} />
                </Routes>
              </Grid>
              <Grid item sm={3} className={classes.right}>
                <Rightbar />
              </Grid>
            </Grid>
            <Add />
          </BrowserRouter>
    </div>
  );
};

export default App;
