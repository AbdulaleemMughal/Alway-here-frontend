import { Toaster } from "react-hot-toast";
import "./App.css";
import { AppRouter } from "./router/appRouter";
import { useAuth } from "./hook/useAuth";
import { useEffect } from "react";
import { getTokenFromLocalStorage } from "./utils/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "./store/authSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getLoggedInUser } = useAuth();

  useEffect(() => {
    (async () => {
      const token = getTokenFromLocalStorage();
      if (token) {
        await getLoggedInUser().then(() => {
          navigate("/account");
        });
      } else {
        dispatch(removeUser());
      }
    })();
  }, []);

  return (
    <>
      <AppRouter />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}

export default App;
