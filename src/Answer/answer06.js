import './Answer.css';
import { useNavigate } from "react-router-dom";
import { ProgressBar } from './answer01';

function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/type03'))}
                style={{top:'80vh'}}>
            다음으로</button>
        </div>
    )
}
export default function answer06() {
    return(
        <div className="App">
            <ProgressBar num="6" />
            <div className="AnsTitle">
                사회역사영역 
            </div>
            <div>
                졸업을 위해서는 영역별, 역량별로 <br/>
                1과목 이상씩 이수해야 합니다!
                따라서 백경이는 사회역사영역의 과목
                하나 이상을 추가로 수강해야겠네요!
            </div>
            <NextBtn />
        </div>
    )
}