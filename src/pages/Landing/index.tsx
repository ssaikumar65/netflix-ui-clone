import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import "./index.css";
import Main from "../../components/Main";
import { data } from "../../utils/data";
import Card from "../../components/Card";
const Landing = () => {
  return (
    <div className="landingpage">
      <Main />
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
