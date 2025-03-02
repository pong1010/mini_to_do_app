import React from "react";
import Login from "./Login"

const Home = ( ) => {

return (
    <>
    <div className="wrap__main">
        <div>
            <h1>
                <p><span>M</span>ini</p>
                <p><span>T</span>odo</p>
                <p><span>L</span>ist</p>
                <p><span>A</span>pp</p>
            </h1>
        </div>
        <div className="wrap__login">
            <Login/>
        </div>
    </div>
    </>
    );

};
export default Home;