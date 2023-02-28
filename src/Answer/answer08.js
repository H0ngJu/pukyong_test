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
                style={{top:'80vh'}}>
            다음으로</button>
        </div>
    )
}
export default function answer08() {
    return(
        <div className="App">
            <ProgressBar num="8" />
            <div className="AnsTitle">
                3명입니다! (, , ,)
            </div>
            <div>재수강 조건에 유의해주세요!</div>
            <div>  
                백경이 (X)
                재수강시 받을 수 있는 최대 학점은 A0 입니다.
            </div>

            <div>  
                A (X)
                재수강은 성적이 C+ 이하일 때만 가능합니다.
            </div>

            <div>  
                C (X)
                +와 0은 온전히 교수 재량으로, 비율이
                정해져 있지 않습니다. 따라서 교수님에 따라
                A+가 한 명도 없을 수 있습니다!
            </div>
            <NextBtn />
        </div>
    )
}