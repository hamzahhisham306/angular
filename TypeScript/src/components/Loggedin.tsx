import { useState } from "react";

function Loggedin() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Logged in</button>
      <button onClick={handleLogout}>Logged out</button>
      <h2>User is {isLoggedIn ? "Loggin" : "Log out"}</h2>
    </div>
  );
}

export default Loggedin;
