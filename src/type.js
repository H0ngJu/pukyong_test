import './style.css';
import { useNavigate } from "react-router-dom";

function Title(props) {
    return (
        <div>
            <h2 className="Title">Pt.{props.id} {props.part}</h2>
        </div>
    )
}

function PartImg(props) {
    return (
        <div>
            <img src={props.url} className="PartImg"></img>
        </div>
    )
}

function PartNum(props) {
    return (
        <div className="PartNum">
            {props.id} / 7
        </div>
    )
}

function NextBtn(props) {
    return (
        <div>
            <button className="NextBtn" onClick={() => { }}>다음으로</button>
        </div>
    )
}

export default function type() {
    // const navigate = useNavigate();
    // function nextPage() {
    //     navigate('/user/home');
    // }

    return (
        <div className="App">
            <Title id="1" part="수강신청" />
            <PartImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102119098_72062.png" />
            <PartNum id="1" />
            <NextBtn onChangeMode={() => { }} />
        </div>
    );
}