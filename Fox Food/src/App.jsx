import { Outlet } from "react-router-dom";
import "./style.css";
import Header from "./components/Header";
import { navBar } from "./Data/header";

function App() {
  return (
    <>
      <Header {...navBar} />
      <Outlet />
    </>
  );
}
export default App;
