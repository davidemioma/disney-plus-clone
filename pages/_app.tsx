import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loader from "../components/Loader";
import Login from "../components/Login";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Login />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
