import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Suspense fallback={<CircularProgress />}>
          <AppRoutes />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
