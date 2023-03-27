import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./index.css";

const Featured = () => {
  return (
    <div className="featured">
      <img
        width={"100%"}
        loading="lazy"
        src="https://occ-0-4778-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWMOEDtUyHzMsgAfrD7QVioXxsSjkdGb5NV2-mDic5sjFN92j5hhnLNdXSUEkj-YPBNYomkHW07XICFk-ltsM9hvDC4NoQ5VfKXE.webp?r=899"
        alt=""
      />
      <div className="info">
        <img
          loading="lazy"
          src="http://occ-0-4778-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeQ2_9Ym98ryHsjO77NiykehaUmcWLUArl3pjGwgGc-sEPABBuMLtIjvEVv8qApf6DTW2HNm7a4y4EagHgFX_xZaunvR-8RlaxTvqtyVjYPhrk7TNauLIw_wQ4JsF6vAd47GFrXw5EDGTVHFx6MwNcLTEfC3dAZd5_haZFJaTGGMGuTy06h_AA.webp?r=e1e"
          alt=""
        />
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
