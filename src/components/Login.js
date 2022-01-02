import "../App.css";
import { useState, useContext } from "react";
import AppStore from "../AppContext";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const ctx = useContext(AppStore);

  const onSubmitHandler = async (event) => {
    console.log(ctx.token);
    event.preventDefault();
    const data = {
      email,
      password,
      saveInfo,
    };
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password, saveInfo });

    const res = await axios.post(
      "http://localhost:3005/api/auth/login",
      body,
      config
    );
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    console.log(res.data);
    ctx.changeToken(res.data.token);
    console.log(ctx.token);
  };

  return (
    <div className="login-form">
      <h1 className="heading">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>

      <br />
      <form className="form" onSubmit={onSubmitHandler}>
        <div>
          <input
            type="email"
            className="textF"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            className="textF"
            placeholder="Password"
            name="password"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(!saveInfo)}
          />{" "}
          Save Information
        </div>
        <input type="submit" className="btn" value="Login" />
      </form>
    </div>
  );
};

export default Login;
