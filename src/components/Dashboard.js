import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppStore from "../AppContext";
import axios from "axios";
const Dashboard = () => {
  const ctx = useContext(AppStore);
  const [user, setUser] = useState("");
  const onLogoout = () => {
    ctx.changeToken(false);
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${ctx.token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .get("http://localhost:3005/api/auth/user", config)
      .then((res) => {
        setUser(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ marginTop: "5rem", textAlign: "center" }}>
      <h1>Welcome, {user}</h1>
      <Link onClick={onLogoout} to="/" replace>
        <i className="fas fa-sign-out-alt"></i>{" "}
        <span className="hide-sm"> &nbsp;Logout</span>
      </Link>
    </div>
  );
};

export default Dashboard;
