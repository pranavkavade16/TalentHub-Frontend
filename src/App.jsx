import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";

import useAppDispatch from "./hooks/useAppDispatch";
import { fetchCurrentUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
