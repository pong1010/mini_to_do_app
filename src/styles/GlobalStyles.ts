import { createGlobalStyle } from "styled-components";
import bgLogin from "../assets/img/bg-login.jpeg"

export const GlobalStyle =
createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
},
/* login */
.wrap__main{
background-image: url(${bgLogin});
background-size:cover;
background-position:center;
height: 100vh;
z-index: 10;
}
.wrap__main h1{position:absolute; top:30%; left: 45%; margin: 0 0 0 -460px; transform: translateY(-50%); line-height: 1.1; font-weight: 300; color: rgba(255,255,255,1); letter-spacing: .03em;}
.wrap__main h1 p{font-size: 55px;}
.wrap__main h1 p span{font-size: 60px; font-weight: 600; color: #ed1c24; color: rgba(237,28,36,1);}
.wrap__main h1 p:nth-child(1){padding-left: 0px;}
.wrap__main h1 p:nth-child(2){padding-left: 12px;}
.wrap__main h1 p:nth-child(3){padding-left: 24px;}
.wrap__main h1 p:nth-child(4){padding-left: 36px;}

.wrap__login{position:relative; top:50%; left: 60%; margin: 0 0 0 -460px; transform: translateY(-50%); width: 550px; background:rgba(0,67,95,.5); border:solid 1px #00435f; box-sizing:border-box;}

.wrap__login header{ height:50px; text-align:center; background: rgba(0,0,0,.45); font-size:20px; color:#fff;}
.wrap__login header h2{position: absolute; top: 9px; left: 20px; line-height: 1;}
.wrap__login header h2 img{height: 30px;}
.wrap__login header .title{position: absolute; top: 0; right: 20px; height: 50px; line-height: 50px; font-size: 15px !important; color: rgba(255,255,255,.4)}

.wrap__login .wrap__login__content{ padding: 50px 50px 20px;}
.wrap__login .input__login{width:100%; height: 62px; line-height:60px; margin:0 0 20px; background:#fff; border:solid 1px #bcbcbc; box-sizing:border-box; -moz-box-sizing:border-box;}
.wrap__login .input__login+.input__login{margin:0 0 20px;}
.wrap__login .input__login label{display:inline-block; width:90px; padding:0 0 0 30px; font-size:22px; color:#666; display: none;}

.wrap__login .input__login input{width: 100%; height:60px; padding:0 15px; outline:none; border: none; font-size:20px; vertical-align:1px;}
.wrap__login .input__login input::-webkit-input-placeholder{color:#aeaeae;}
.wrap__login .input__login input::-moz-input-placeholder{color:#aeaeae;}
.wrap__login .input__login input:-ms-input-placeholder{color:#aeaeae;}
.wrap__login .input__login input:focus::-webkit-input-placeholder{color:#010101;}
.wrap__login .input__login input:focus::-moz-input-placeholder{color:#010101;}
.wrap__login .input__login input:focus::-ms-input-placeholder{color:#010101;}

.wrap__login .btn__login{display:block; width:100%; height: 60px; margin:0 0 20px; font-size:22px; text-align:center; background: #007597; border:solid 1px rgba(255,255,255,.3); box-sizing:border-box; -moz-box-sizing:border-box; color:#fff; transition: background-color 0.4s ease; -webkit-transition: background-color 0.4s ease; cursor:pointer;}
.wrap__login .btn__login:hover{background:#1c1b1b;}

.wrap__login .btn__signup{display:block; width:100%; height: 60px; margin:0 0 20px; font-size:22px; text-align:center; background: #007597; border:solid 1px rgba(255,255,255,.3); box-sizing:border-box; -moz-box-sizing:border-box; color:#fff; transition: background-color 0.4s ease; -webkit-transition: background-color 0.4s ease; cursor:pointer;}
.wrap__login .btn__signup:hover{background:#1c1b1b;}

.wrap__signup_overlay {
position: absolute;
top: -200px;
left: -800px;
width: 100vw;
height: 99vh;
background: rgba(0,0,0,0.7);
z-index: 998;
pointer-events: auto;
}

.wrap__signup_modal {
width: 500px;
height: 370px;
position: fixed;
top: 50%;
left: 50%;
margin: -250px 0 0 -250px;
color:#fff;
background:rgba(24,78,94,0.95);
border-radius: 10px;
z-index: 999;
display: flex;
flex-direction: column;
align-items: flex-start;
pointer-events: auto;
}
.wrap__signup_modal header{ height:60px; text-align:center; background: rgba(0,0,0,.45); font-size:20px; color:#fff; width: 100%;}
.wrap__signup_modal header h2{
position: absolute;
float: left;
top: 9px;
left: 20px;
line-height: 1;
margin: 10px 10px 0 10px;
font-size: 22px;
}
.wrap__signup_modal header img{height: 30px; margin: 5px 0 0 0;}
.wrap__signup_modal header .title{position: absolute; top: 0; right: 20px; height: 50px; line-height: 50px; font-size: 15px !important; color: rgba(255,255,255,.4)}
.wrap__signup_modal header button{
float: right;
width: 25px;
height: 25px;
background: rgba(12,41,50,.45);
color: white;
position: absolute;
border: none;

    font-size: 18px;
    font-weight: 600;

    margin : 27px 0 0 0px;
}
.wrap__signup_modal header button:hover{
float: right;
width: 25px;
height: 25px;
background: rgba(12,41,50,.45);
position: absolute;
border: none;

font-size: 18px;
font-weight: 600;

margin : 27px 0 0 0px;
cursor: pointer;
color:black;
}
.wrap__signup_modal table{
position: relative;
rgba(176, 185, 214, 0.35);
width: 80%;
min-height: 250px;
border-collapse: collapse;
margin-top: 5px;
}

.wrap__signup_modal table input {
width:90%; height: 32px; margin: 0 0 0 10px; background:#fff; border:solid 1px #bcbcbc; box-sizing:border-box; -moz-box-sizing:border-box;
}
.wrap__signup_modal table select {
width:90%; height: 32px; margin: 0 0 0 10px; background:#fff; border:solid 1px #bcbcbc; box-sizing:border-box; -moz-box-sizing:border-box;
}

.wrap__signup_modal table label {
width:100%; height: 30px; margin: 0 0 0 0px;
}

.wrap__signup_modal_table_tr_line {
border-bottom: solid 1px #fff;
}
.wrap__signup_modal_table_td_line_right {
border-right: solid 1px #fff;
}

.wrap__signup_modal footer{ height:50px; background: rgba(0,0,0,.45); font-size:20px; color:#fff; width: 100%; text-align:center;}
.wrap__signup_modal footer h2{
position: absolute;
float: left;
top: 9px;
left: 20px;
line-height: 1;
margin: 10px 10px 0 10px;
font-size: 22px;
}

.wrap__signup_modal footer button{
width: 80px;
height: 35px;
background: rgba(12,41,50,.45);
color: white;
border: none;

    font-size: 18px;
    font-weight: 600;

    margin : 5px 20px 0 20px;
}
.wrap__signup_modal footer button:hover{
width: 80px;
height: 35px;
background: rgba(12,41,50,.45);
border: none;

    font-size: 18px;
    font-weight: 600;

    margin : 5px 20px 0 20px;
    cursor: pointer;
    color:black;
}

`;