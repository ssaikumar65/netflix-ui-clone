import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../../utils/faq";
import "./index.css";
const Faq = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="faqdiv">
      <div className="topdiv">
        <span className="large">Frequently Asked Questions</span>
      </div>
      <div className="faq">
        {data.map((item, index) => (
          <div onClick={() => toggle(index)} key={index} className="question">
            <span>{item.title}</span>
            <div className={selected === index ? "content show" : "content"}>
              <span>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bottomdiv">
        <span className="small">
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="getstarted">
          <input placeholder="Email Address" type={"email"} name={"email"} />
          <button onClick={() => navigate("/home")}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
