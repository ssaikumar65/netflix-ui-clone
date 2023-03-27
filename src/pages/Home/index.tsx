import Featured from "../../components/Featured";
import "./index.css";
import List from "../../components/List";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List heading="Popular on Netflix" />
      <List heading="Trending" />
      <List heading="Top 10 Movies" />
      <Footer />
    </div>
  );
};

export default Home;
