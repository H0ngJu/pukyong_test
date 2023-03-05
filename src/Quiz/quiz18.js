import "./quiz.css";
import { useNavigate } from "react-router-dom";

var num = 1;
var guage = num * 10;

function ProgressBar(props) {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   // simulate progress updating
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress === 100) {
  //         clearInterval(timer);
  //       }
  //       return prevProgress + 10;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="progressBar">
      <div className="progressNum" value={num}>{`${num}/20`}</div>
      <progress value={guage} max="100" />
    </div>
  );
}

// function ProgressBar(props) {
//   return (
//     <div className="progressBar">
//       <div className="progressContent">{props.content}/20</div>
//       <sapn className="progress">
//         <span className="guage" />
//       </sapn>
//     </div>
//   );
// }

function QuizHead(props) {
  return (
    <div>
      <div className="QuizHead">{props.content}</div>
    </div>
  );
}

function Option(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button className="Option" onClick={() => navigate("/answer18")}>
        {props.option}
      </button>
    </div>
  );
}

function QuizImg(props) {
  return <img src={props.url} alt="" className="QuizImg" />;
}

export default function Quiz01() {
  // const movePage = useNavigate;

  // function gotype(){
  //   movePage('/type');
  // }

  return (
    <div className="Quiz">
      <ProgressBar />
      {/* <ProgressBar content="1" /> */}
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead content="재학생이 도서관에서 빌릴 수 있는 최대 권수와 기간은?" />
      </div>
      <Option option="3권 10일" />
      <Option option="3권 14일" />
      <Option option="5권 10일" />
      <Option option="5권 14일" />
    </div>
  );
}
