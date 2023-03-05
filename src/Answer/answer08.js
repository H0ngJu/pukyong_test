import './Answer.css';
import { useNavigate } from "react-router-dom";
import { ProgressBar } from './answer01';

function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/type04'))}
                style={{top:'85vh'}}>
            다음으로</button>
        </div>
    )
}
export default function answer08() {
    return(
        <div className="App">
            <ProgressBar num="8" />
            <div className="AnsTitle" style={{width: "90%"}}>
                3명입니다! ( 백경이, 뿌공이, 연진이 )
                <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
            </div>

            <div className="Ans bold" style={{top: "3vh"}}>재수강 조건에 유의해주세요!</div>
            <div className="Ans normal" style={{top: "6vh"}}>  
                백경이 (X) <br/>
                재수강시 받을 수 있는 최대 학점은 A0 입니다.
            </div>
            <div className="Ans normal" style={{top: "8vh"}}>  
                뿌공이 (X) <br/>
                재수강은 성적이 C+ 이하일 때만 가능합니다.
            </div>
            <div className="Ans normal" style={{top: "10vh"}}>  
                연진이 (X) <br/>
                +와 0은 온전히 교수 재량으로, 비율이
                정해져 있지 않습니다. 따라서 교수님에 따라
                A+가 한 명도 없을 수 있습니다!
            </div>
            <NextBtn />
        </div>
    )
}