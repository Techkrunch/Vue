import Homepage from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";

export default [
  { path: "/Home", component: Homepage },
  { path: "/About", component: About },
  { path: "/Register", component: Register },
  { path: "/login", component: Login }  
];
