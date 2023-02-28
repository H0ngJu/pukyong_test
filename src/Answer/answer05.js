import './Answer.css';
import { useNavigate } from "react-router-dom";

function NextBtn(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/answer06'))}>
            다음으로</button>
        </div>
    )
}
export default function answer05() {
    return(
        <div className="App">
            <div>
                2023학년도 기준 필수 교양 
            </div>
            <div>
                <ul>
                    <li>대학 생활과 진로</li>
                    <li>부경 인성 세미나</li>
                    <li>대학영어</li>
                    <li>사유와 표현</li>
                    <li>컴퓨팅 사고</li>
                </ul>
            </div>
            <div>
                참고 : '21세기 리더십'은 교양 교과목 이름이었습니다 ^.^
            </div>
            <NextBtn />
        </div>
    )
}