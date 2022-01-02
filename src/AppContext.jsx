import { createContext, useState, useEffect } from "react";

const AppStore = createContext({
  token: "",
  //   userId: "",
  changeToken: (token) => {},
  //   ChnageUserId: (id) => {},
});

export const AppStoreCom = (props) => {
  const [token, setToken] = useState(false);
  // const [userId, setUserId] = useState("");

  const changeToken = (token) => {
    setToken(token);
  };

  return (
    <AppStore.Provider
      value={{
        token: token,
        changeToken: changeToken,
      }}
    >
      {props.children}
    </AppStore.Provider>
  );
};

export default AppStore;
