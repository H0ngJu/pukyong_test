import './Answer.css';
import { useNavigate } from "react-router-dom";


function NextBtn(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/type02'))}>
            다음으로</button>
        </div>
    )
}
export default function answer04() {
    return(
        <div className="App">
            <div>
                강의계획서에 기재된 교재 및 참고 교재들은 <br />
                반드시 사용하는 게 아닙니다!!
            </div>
            <div>
            교재를 전혀 사용하지 않고 PPT 자료로만 수업하시는 <br />
            교수님도 있기 때문에 꼭 학기 첫 날에 OT를 듣고 <br />
            교재를 구매하시는 게 좋습니다!
            </div>

            <NextBtn />
        </div>
    )
}