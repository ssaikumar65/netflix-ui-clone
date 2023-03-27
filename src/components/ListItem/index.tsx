import { Add, PlayArrow, ThumbUpAltOutlined } from "@mui/icons-material";
import "./index.css";

export default function ListItem({ item }: { item: any }) {
  return (
    <div className="listItem">
      <div className="image">
        <img src={item.img} alt={item.title} />
        <div className="trailer">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="details">
          <div className="buttons">
            <div className="icon">
              <PlayArrow />
            </div>
            <div className="icon">
              <Add />
            </div>
            <div className="icon">
              <ThumbUpAltOutlined />
            </div>
          </div>
          <div className="date">
            <span style={{ color: "lightgreen" }}>New</span>
            <span>
              {item.year} | {item.imdbrating} | &#7476;&#7472;
            </span>
          </div>
          <div className="titleinfo">
            <span>
              {item.title} | {item.vtype}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
