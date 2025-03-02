import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import star from "../assets/img/stars.svg"
import { EnvContext , SignUpModalContext} from "../components/Context/GlobalContext"

import SignUpModal from "../components/Modal/SignUpModal"

/* interface LoginProps {
// 현재 App이 실행중인 환경 //
env: string;
} */

const Login = ( /* { env }: LoginProps */ ) => {
const { env } = useContext(EnvContext);
const { isOpen, setIsOpen } = useContext(SignUpModalContext);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const handleLogin = () => {
    //로그인 처리로직
        console.log("Login in with : " , email, password );
        navigate("/main", { state: true}); // STATE 추가하여 브라우저에 URL입력한게 아님을 확인
};

return (
    <>
    <div>
        <header>
            <h2><img src= {star} alt="SQMS" / >{env?.env}</h2>
            <div className="title">
                조기착수 인간이 되어보자 ♬
            </div>
        </header>
        <div className="wrap__login__content">
            <div className="input__login">
                <label>아이디</label>
                <input type = "email" value={email} onChange= { (e) => setEmail(e.target.value)} placeholder = "아이디" />
            </div>
            <div className="input__login">
                <label>비밀번호</label>
                <input type = "password" value={password} onChange= { (e) => setPassword(e.target.value)} placeholder = "비밀번호" />
            </div>
            <button className="btn__login" onClick = {handleLogin}>ID/PW로그인</button>
            <button className="btn__signup" onClick = {() => setIsOpen(true)}>사용자 권한신청</button>
            <button className="btn__login" onClick = {handleLogin}>비밀번호 초기화</button>
        </div>
        {isOpen && (
        <>
        <div className="wrap__signup_overlay">
            <div className= "wrap__signup_modal">
                <SignUpModal  isOpen = {isOpen} onClose = {() => setIsOpen(false)} />
            </div>
        </div>
        </>
        )}
    </div>
    </>
    );

};

export default Login;