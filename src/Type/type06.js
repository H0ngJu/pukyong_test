import './type.css';
import { useNavigate } from "react-router-dom";



function Title(props) {
    return (
        <div>
            <h2 className="Title">Pt.{props.id} {props.part}</h2>
        </div>
    )
}

function NextBtn(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/quiz15'))}
                style={{top: '80vh'}}
            >다음으로</button>
        </div>
    )
}

export default function type02() {
    return (
        <div className="App">
            <Title id="6" part="학교 캠퍼스" />
            <img className="PartImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102119098_72062.png"></img>
            <div className="PartNum">6 / 6</div>
            <NextBtn onChangeMode={() => { }} />
        </div>
    );
}
