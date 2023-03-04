import './Answer.css';
import { useNavigate } from "react-router-dom";
import { ProgressBar } from './answer01';

function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={() => (navigate('/type03'))}
                style={{ top: '85vh' }}>
                다음으로</button>
        </div>
    )
}
export default function answer06() {
    return (
        <div className="App">
            <ProgressBar num="6" />
            <div className="AnsTitle" style={{ width: "90%" }}>
                사회역사영역
                <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
            </div>

            <div className="Ans normal" style={{top: "5vh", fontSize: "18px"}}>
                졸업을 위해서는 영역별, 역량별로 1과목 이상씩 이수해야 합니다. <br/><br/>
                현재 백경이는 핵심역량들은 모두 이수하였고, 사회역사영역의 아무 역량에
                해당하는 교과목 하나 이상을 추가로 수강하면 되겠네요! <br/><br/>
                이 정보는 학사행정정보시스템의 학사정보 - 졸업 - 학점관리시스템에서
                확인할 수 있습니다!
            </div>

            <NextBtn />
        </div>
    )
}