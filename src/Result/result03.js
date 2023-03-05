import "./result.css";
//import { BrowserView, MobileView } from 'react-device-detect';

function ResultImg(props) {
  return (
    <div>
      <img src={props.url} alt="" className="resultImg" />
    </div>
  );
}

function Count(props) {
  return (
    <div>
      <div className="count">{props.content}/20</div>
    </div>
  );
}

function ResultTitle(props) {
  return (
    <div>
      <div className="resultTitle">{props.content}</div>
    </div>
  );
}

function SubResultTitle(props) {
  return (
    <div>
      <div className="subResultTitle">{props.content}</div>
    </div>
  );
}

function Discription(props) {
  return (
    <div>
      <div className="r_discription">{props.content_1}</div>
      <div className="r_discription">{props.content_2}</div>
      <div className="r_discription">{props.content_3}</div>
    </div>
  );
}

function Subscribe(props) {
  return (
    <div>
      <div className="subscribe">{props.content}</div>
    </div>
  );
}

function QuestionTitle(props) {
  return (
    <div>
      <div className="questionTitle">{props.content}</div>
    </div>
  );
}

function TipContainer(props) {
  return (
    <div className="tipContainer">
      <img
        className="tipImg"
        alt=""
        src={
          "https://www.pknu.ac.kr/upload/raonkeditordata/2022/01/25/20220125_092352379_38272.png"
        }
      />
      <div className="tipTitle">{props.content}</div>
    </div>
  );
}
export default function Result() {
  // const movePage = useNavigate;

  // function gotype(){
  //   movePage('/type');
  // }

  return (
    <div className="result">
      <ResultImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102114277_22215.png" />
      <Count content="10" />
      <SubResultTitle content="신기한게 많은" />
      <ResultTitle content="부경대 새내기" />
      <Discription
        content_1="부경대에 대해 알아 갈 것이 많은 당신!"
        content_2="귀여운 새내기이시군요?"
        content_3="부경대에 입학한 것을 축하해요:)"
      />
      <hr className="divider" />
      <QuestionTitle content="V 자주하는 질문" />
      <Subscribe content="Q1. 노트북 vs 태블릿" />
      <div className="container">
        <p>
          <p className="content">대학생에게 노트북은 필수! </p>
          <div className="content">
            한글, ppt 등 다양한 문서작업, 팀플을 하기 위해서는 노트북 또는
            데스크탑이 필요합니다. 태블릿은 부가적인 요소인 것 같아요.
          </div>
          <div className="content">
            집에 데스크탑이 있어도 밖에서 노트북이 필요한 상황이 종종 있어요.
            각자 상황에 맞는 선택 하시길~ :)
          </div>
        </p>
        <div className="content">
          노트북으로도 강의 타이핑을 하기도 하고, 태블릿으로 손필기를 하기도
          해요!
        </div>
      </div>
      <Subscribe content="Q2. PBL? TBL? BL?" />
      <div className="container">
        <p>
          <div className="content">FL</div>
          <div className="content">
            Flipped Learning. 교수자가 제시한 자료를 학습자가 미리 개별 학습 후
            수업시간에 이에 대한 토론활동을 하는 것
          </div>
          <div className="content">PBL</div>
          <div className="content">
            Problem Based Learning. 실제적인 문제를 중심으로 수업상황을
            구조화하는 학습법
          </div>
          <div className="content">BL</div>
          <div className="content">
            Blended Learning. 대면과 비대면을 섞어서 하는 수업 방식
          </div>
          <div className="content">TBL : Team Based Learning. 팀 기반 학습</div>
          <div className="content">ML</div>
          <div className="content">
            Machine Learning. 4차산업혁명내 인공지능 분야에서 사용하는 데이터
            기반 학습
          </div>
          <div className="content">AL</div>
          <div className="content">
            Action Learning. 학습자들이 팀을 구성, 각자 자신의 과제, 팀 전체의
            과제를 Learning Coach와 함께 해결해나가는 것
          </div>
        </p>
      </div>
      <hr className="divider" />
      <TipContainer content="유용한 부경 전용 어플" />
      <TipContainer content="교내 wifi 연결하는 법" />
      <TipContainer content="맛집 list" />
      <TipContainer content="과사 전화번호와 위치" />
      <div className="shareLink">친구에게 테스트 공유하기</div>
    </div>
  );
}
