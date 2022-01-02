import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AppStore from "./AppContext";
function App() {
  const ctx = useContext(AppStore);
  // let routes;
  console.log(ctx.token);
  // if (ctx.token === false) {
  //   console.log("path");
  //   routes = <Route path="/" element={<Login />} exact />;
  // } else {
  //   routes = <Route path="/dash" element={<Dashboard />} exact />;
  // }

  return (
    <BrowserRouter>
      <Route exact path="/">
        {ctx.token ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
    </BrowserRouter>
  );
}

export default App;
