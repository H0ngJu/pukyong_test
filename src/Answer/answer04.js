import './Answer.css';
import { useNavigate } from "react-router-dom";
import { ProgressBar } from './answer01';


function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={() => (navigate('/type02'))}
                style={{ top: '75vh' }}>
                다음으로</button>
        </div>
    )
}
export default function answer04() {
    return (
        <div className="App">
            <ProgressBar num="4" />
            <div className="AnsTitle" style={{ width: "90%" }}>
                교재는 꼭 OT 먼저 듣고 구매하세요!
                <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
            </div>

            <div className="Ans bold" style={{
                top: '5vh', fontSize: '20px', lineHeight: '34px' }}>
                강의계획서에 기재된 교재들은 반드시 사용하는 게 아닙니다!!
                교재를 전혀 사용하지 않고 PPT로만 수업하시는 교수님도 있기 때문에
                꼭 첫 날에 OT를 듣고 교재를 구매하시는 게 좋습니다! 😊
            </div>

            <NextBtn />
        </div>
    )
}