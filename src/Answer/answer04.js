import './Answer.css';
import { useNavigate } from "react-router-dom";
import { ProgressBar } from './answer01';


function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/type02'))}
                style={{top:'60vh'}}>
            다음으로</button>
        </div>
    )
}
export default function answer04() {
    return(
        <div className="App">
            <ProgressBar num="4" />
            <div className="AnsTitle">
                교재는 꼭 OT 먼저 듣고 구매하세요!
            </div>
            <div className="Ans bold" style={{
                top: '10vh', width: '320px', left: 'calc(50% - 320px/2)',
                fontSize: '20px', lineHeight: '32px'
            }}>
                강의계획서에 기재된 교재들은<br />
                반드시 사용하는 게 아닙니다!!
            </div>
            <div className="Ans bold" style={{
                fontSize: '19px', top: '16vh', width: '340px', left: 'calc(50% - 340px/2)',
                lineHeight: '32px'
            }}>
            교재를 전혀 사용하지 않고 PPT로만<br />
            수업하시는 교수님도 있기 때문에 꼭<br />
            첫 날에 OT를 듣고 교재를 구매하시는<br/>
            게 좋습니다!
            </div>

            <NextBtn />
        </div>
    )
}