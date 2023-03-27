import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="left">
        <img
          width={"120px"}
          height={"30px"}
          onClick={() => navigate("/home")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>News & Popular</span>
        <span>My List</span>
        <span>Browse By Languages</span>
      </div>
      <div className="right">
        <Search />
        <span>Children</span>
        <Notifications />
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="profile">
          <div className="profileimage">
            <img src="https://occ-0-4778-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYwek4mau0aq8LBiWpOp9H-elNn66r0EL42_fBGqhketrOWxlsS0kr3FecG39rgGz-TKvdH24SBdM5MWF4XuTMXL2PXpkwM.png?r=5a3" />
          </div>
          <ArrowDropDown className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
