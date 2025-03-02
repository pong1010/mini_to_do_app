import { EnvContext } from "./components/Context/GlobalContext"
import React , { useEffect, useContext }from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/GlobalStyles";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NODE_ENV = process.env.NODE_ENV;

const RedirectGuard = () => {//useLocation 을 이용하여 브라우저에 URL입력을 통한 페이지 전환 방지
const location = useLocation();
const navigate = useNavigate();

    useEffect ( () => {
        const isDirectAccess = location.state === null;

        if ( isDirectAccess && location.pathname !== "/") {
                navigate("/", { replace: true });//강제이동
            }
        }, [location, navigate]);

    return null;
};
function App() {
console.log("NODE_ENV",NODE_ENV)
const { env, setEnv } = useContext(EnvContext);

useEffect( ()=> {
if (!env) {
setEnv( { env: NODE_ENV } );
}
}
)
console.log("setEnv",env)

const value = "Admin Page"; // value를 정의함!
return (

  <Router>
      <GlobalStyle />
      <RedirectGuard />
        <Routes>
            <Route path="/" element = { <Home/>}  />
            <Route path="main/login" element={ <Login/>} />
            <Route path="/main" element={<Main someProp={value} />} />
           {/*  <Route path="/home" element={ <Home />} /> */}
        </Routes>
  </Router>
);
}

export default App;