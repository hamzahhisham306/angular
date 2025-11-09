import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function User() {
  const [user, setUser] = useState<null | { name: string; email: string }>(
    null
  );
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1></h1>
      <button
        onClick={() => setUser({ name: "Nezar", email: "nezar@example.com" })}
      >
        Set User
      </button>
      <h2 style={{ color: theme.primary.main }}>User name is {user?.name}</h2>
      <button onClick={() => setUser(null)}>Clear User</button>
    </div>
  );
}

export default User;
