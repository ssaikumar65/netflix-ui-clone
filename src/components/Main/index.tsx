import "./index.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="maindiv">
      <div className="bgdiv">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/44355e66-dbf8-4dd8-ba6b-8e9e32ec6abd/IN-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <div className="headerdiv">
        <img
          onClick={() => navigate("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <div className="buttonsdiv">
          <div className="language">English</div>
          <button onClick={() => navigate("/login")}>Sign In</button>
        </div>
      </div>
      <div className="bodydiv">
        <span className="large">Unlimited movies, TV shows and more.</span>
        <span className="medium">Watch anywhere. Cancel anytime.</span>
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

export default Main;
