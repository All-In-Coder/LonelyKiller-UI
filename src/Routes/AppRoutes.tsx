import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import PrivateOutlet from "../Outlet/PrivateOutlet";
import NotFound from "../Components/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateOutlet />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
