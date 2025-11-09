import type { ProfileProps } from "../types/app";
import Login from "./Loggedin";
type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

function Private({ isLoggedIn, Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Vishwas" />;
  } else {
    return <Login />;
  }
}

export default Private;
