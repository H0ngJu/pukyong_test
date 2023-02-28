import './Answer.css';
import { useNavigate } from "react-router-dom";

function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/answer03'))}>
            다음으로</button>
        </div>
    )
}

export default function answer02() {
    return(
        <div className="App">

            <div className="AnsTitle">
                수강신청은 학년별로 신청 가능 기간이 다릅니다!
            </div>    
            <div>4학년 : 첫째날 아침 9시부터</div>
            <div>3학년 : 첫째날 오후 1시부터</div>
            <div>2학년 : 둘째날 아침 9시부터</div>
            <div>
                둘째날 오후 1시 : 타과 지정과목 제외 전 학년 신청 가능
            </div>
            <div>
                셋째날 : 타과 지정과목 포함 전 학년 신청 가능
            </div>
            <div>
                (단, 타학년이 1학년 지정 과목 신청 시 개강 이후 수강 정정 기간에 신청 가능)
            </div>
            <div>
            수강신청 변경 기간 : <br/>
            개강 후 일주일동안은 수강신청 정정기간으로, <br/>
            정원이 마감된 경우에도 담당 교수님에게 연락하여 <br/>
            추가 수강신청이 가능합니다! 
            </div>

            
            <NextBtn />        
        </div>
    )
}