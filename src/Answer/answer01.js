import './Answer.css';
import { useNavigate } from "react-router-dom";


export function ProgressBar(props) {

}

function NextBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="NextBtn"
                onClick={()=>(navigate('/answer02'))}>
            다음으로</button>
        </div>
    )
}
export default function answer01() {
    return(
        <div className="App">
            <ProgressBar />
            <div className="AnsTitle">
                예비수강신청 후 신청이 가장 빠릅니다!
                {/* <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img> */}
            </div>

            <div className="bold txt1 Ans">1. 예비수강신청</div>
            <div className="normal txt1 Ans">
                예비수강신청 기간에 신청해둔 과목들은,
                본수강신청 때 수강 메뉴에 들어가면 바로
                뜨기 때문에 가장 빠르게 신청할 수 있어요 !
            </div>

            <div className="bold txt2 Ans">2. 학수번호 입력</div>
            <div className="normal txt2 Ans">
                빠른수강신청 탭에서 학수번호 및 분반 9자리를
                입력하는 방식으로도 신청할 수 있습니다.
                예비수강신청 때 신청하지 못했거나, 플랜2 
                과목들의 경우 학수번호를 단축어로 추가해두면
                편하겠죠 !
            </div>

            <div className="bold txt3 Ans">3. PC 포털에서 신청</div>
            <div className="normal txt3 Ans">
                부경포털의 학사행정정보시스템에서도 수강신청이
                가능하지만, 모바일 환경보다 복잡해서 추천드리지
                않습니다! 모바일 수강신청 어플이 훨씬 편해요 !
            </div>

            <NextBtn />
        </div>
    )

}