import Login from "./pages/Login"
import Home from "./pages/Home"
import Main from "./pages/Main"

const Routes = [
{
path: "/home",
name: "Home으로",
icon: "nc-icon nc-chart-pie-35",
component: Home,
layout: "/main"
},
{
path: "/login",
name: "Login Page",
icon: "nc-icon nc-circle-09",
component: Login,
layout: "/main"
},
{
path: "/main",
name: "Main 페이지",
icon: "nc-icon nc-notes",
component: Main,
layout: "/main"
},

];

export default Routes;