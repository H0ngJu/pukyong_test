import './Answer.css';
import { useNavigate } from "react-router-dom";

function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/answer04'))}>
            다음으로</button>
        </div>
    )
}
export default function answer03() {
    return(
        <div className="App">
            <div>
                직전학기의 이수가능학점 18학점 중 17학점을
                수강하였으므로 1학점을 이월 가능하고,
                성적 평점평균이 3.75 이상이므로 추가로 2학점을
                이월 가능합니다.
            </div>
            <div>
                18 + 1 + 2 = 21
                따라서 백경이는 이번 학기에 최대 21학점까지
                수강이 가능합니다!
            </div>
            <div>
                (이월은 최대 한 학기까지만 가능합니다 !)
            </div>
            <NextBtn />
        </div>
    )
}