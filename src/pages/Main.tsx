import React, { useState,useContext, Component , useRef} from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";

import routes from "../routes.js";

import sidebarImage from "../assets/img/sidebar-3.jpg";

interface Item {
path: string;
name: string;
icon: string;
component: React.ComponentType;
layout: string;
}

interface ItemProp {
prop: Item;
}

interface ItemProps {
routes: Item[];
}

interface FixedPluginProps {
hasImage: string;
setHasImage: (hasImage:string) =>void;
color: string;
setColor: (color:string) =>void;
image: string;
setImage: (image:string) =>void;
}

export default function Main () {
const [image, setImage] = useState(sidebarImage);
const [color, setColor] = useState("black");
const [hasImage, setHasImage] = useState(true);
const location = useLocation();
const mainPanel = useRef<HTMLDivElement | null>(null);

const getRoutes = ({routes} : ItemProps ) => {
    return routes.map( ( {path, component:Component, layout}, index  ) => {
      if (layout === "/admin") {
        return (
          <Route
            path={ path}
            element= {<Component />}
            key={index}
          />
        );
      } else {
        return null;
      }
    });
};
React.useEffect(() => {

 const docEl = document.documentElement;
 const scrEl = document.scrollingElement;

if(docEl)  (docEl as HTMLElement).scrollTop = 0;
if(scrEl)  (scrEl as HTMLElement).scrollTop = 0;
if(mainPanel.current) mainPanel.current.scrollTop = 0;

if (
  window.innerWidth < 993 &&
  document.documentElement.className.indexOf("nav-open") !== -1
) {
  document.documentElement.classList.toggle("nav-open");

  var element = null;

  if(document.getElementById("bodyClick")) element = document.getElementById("bodyClick");
  if(element && element.parentNode ) element.parentNode.removeChild(element);


}
}, [location]);

return(
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Routes>{ getRoutes( {routes}) }</Routes>
          </div>
          <Footer />
        </div>
      </div>
{/*       <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color:string)}
        image={image}
        setImage={(image) => setImage(image)}
      /> */}
    </>
);
}