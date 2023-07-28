import Home from "./Home";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div>
        <Home />
        <Outlet />
      </div>
    </div>
  );
}
