import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./components/NotFound";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="/blogs/update/:id">
              <Update/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
