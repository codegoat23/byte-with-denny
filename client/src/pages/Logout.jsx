import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Logout = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch logout action
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
