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
      <div className="discription">{props.content_1}</div>
      <div className="discription">{props.content_2}</div>
      <div className="discription">{props.content_3}</div>
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
    <div>
      <img
        className="tipImg"
        alt=""
        src={
          "https://www.pknu.ac.kr/upload/raonkeditordata/2022/01/25/20220125_092352379_38272.png"
        }
      />
      <div className="tipContainer">{props.content}</div>
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
      <ResultImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/01/25/20220125_092342162_30744.png" />
      <Count content="15" />
      <SubResultTitle content="모르는 것이 없는" />
      <ResultTitle content="부경대 고인물" />
      <Discription
        content_1="부경대에 대해 모든 것을 알고 있는 당신!"
        content_2="백경이의 사랑을 받고 있어요~"
        content_3="헌내기일 확률 98%"
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
      <hr className="divider" />
      <TipContainer content="유용한 부경 전용 어플" />
      <TipContainer content="이것이 꿀교다!" />
      <TipContainer content="학식추천 list" />
      <TipContainer content="교내 wifi 연결하는 법" />
      <TipContainer content="학교 건물 문 위치" />
      <TipContainer content="맛집 list" />
      <TipContainer content="과사 전화번호와 위치" />
      <div className="shareLink">친구에게 테스트 공유하기</div>
    </div>
  );
}
