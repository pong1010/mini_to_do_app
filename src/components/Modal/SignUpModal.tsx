import React, { useState } from "react";
import star from "../../assets/img/stars.svg"

interface SignUpModalProps {
isOpen: boolean;
onClose: () => void;
}

const SignUpModal : React.FC<SignUpModalProps> = ( { isOpen, onClose }) => {
const [email, setEmail ] = useState("");
const [password, setPassword] = useState("");
const [chkPassword, setChkPassword] = useState("");
const [userId, setUserId] = useState("");
const [userNm, setUserNm] = useState("");
const [userDept, setUserDept] = useState("");

if ( !isOpen ) return null;


const handleSignup = () =>{
        //회원가입처리로직
        console.log("Signing up with :", email, password, chkPassword, userId, userNm, userDept, );
    }

return (
    <div>
        <header>
            <div  style = {{ minWidth: '400px', textAlign: 'left', float: 'left', height:'100%'}}>
                 <img src= {star} alt="SQMS" / > <h2> 권 한 신 청 </h2>
            </div>
            <div  style = {{ minWidth: '100px', float: 'right', height:'100%'}}>
                <button onClick = { onClose } > X</button>
            </div>
        </header>
        <div style = {{ textAlign: 'center' , alignItems: 'center', display: 'flex', flexDirection: 'column', minHeight: '265px' }} >
            <table>
                <colgroup>
                    <col style= {{ width: '25%}'}} />
                    <col style= {{ width: '50%'}} />
                </colgroup>
                <tbody>
                    <tr className="wrap__signup_modal_table_tr_line">
                        <td className="wrap__signup_modal_table_td_line_right"> <label>사용자아이디</label> </td>
                        <td > <input type="text" value={userId} onChange = { (e) => setUserId(e.target.value) } placeholder = "아이디를 입력해주세요"/> </td>
                    </tr>
                    <tr className="wrap__signup_modal_table_tr_line">
                        <td className="wrap__signup_modal_table_td_line_right">  <label>비밀번호</label> </td>
                        <td > <input type="password" value={password} onChange = { (e) => setPassword(e.target.value) } placeholder = "비밀번호를 입력해주세요"/></td>
                    </tr>
                    <tr className="wrap__signup_modal_table_tr_line">
                        <td className="wrap__signup_modal_table_td_line_right">  <label>비밀번호확인</label> </td>
                        <td >  <input type="password" value={chkPassword} onChange = { (e) => setChkPassword(e.target.value) } placeholder = "비밀번호를 재입력해주세요"/></td>
                    </tr>
                    <tr className="wrap__signup_modal_table_tr_line">
                        <td className="wrap__signup_modal_table_td_line_right">  <label>이름</label> </td>
                        <td >  <input type="text" value={userNm} onChange = { (e) => setUserNm(e.target.value) } placeholder = "이름을 입력해주세요"/> </td>
                    </tr>
                    <tr className="wrap__signup_modal_table_tr_line">
                        <td className="wrap__signup_modal_table_td_line_right">  <label>파트구분</label> </td>
                        <td >
                            <select onChange = { (e) => setUserDept(e.target.value) } value={userDept} >
                                <option label ="소속파트를 선택해 주세요" value="DEF"/>
                                <option label ="연동" value="DI"/>
                                <option label ="전처리" value="PP"/>
                                <option label ="BRMS" value="BRMS"/>
                                <option label ="UI" value="UI"/>
                                <option label ="DS" value="DS"/>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="wrap__signup_modal_table_td_line_right">  <label>이메일</label> </td>
                        <td>  <input type="email" value={email} onChange = { (e) => setEmail(e.target.value) } placeholder = "이메일을 입력해주세요"/> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <footer>
            <div  style = {{ minWidth: '500px'}}>
                 <button onClick = {handleSignup}> 권한신청 </button>
                 <button onClick = { onClose }> 닫기 </button>
            </div>
        </footer>
    </div>
)
}

export default SignUpModal;