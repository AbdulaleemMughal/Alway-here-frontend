import { Toaster } from "react-hot-toast";
import "./App.css";
import { AppRouter } from "./router/appRouter";
import { useAuth } from "./hook/useAuth";
import { useEffect } from "react";
import { getTokenFromLocalStorage } from "./utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./store/authSlice";
import type { RootState } from "./store/appStore";
import { Loader } from "lucide-react";

function App() {
  const dispatch = useDispatch();
  const { getLoggedInUser } = useAuth();
  const isLoading = useSelector((store: RootState) => store.user.isLoading);

  useEffect(() => {
    (async () => {
      const token = getTokenFromLocalStorage();
      if (token) {
        await getLoggedInUser();
      } else {
        dispatch(removeUser());
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={60} className="animate-spin" color="#7454a9" />
      </div>
    );
  }

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
