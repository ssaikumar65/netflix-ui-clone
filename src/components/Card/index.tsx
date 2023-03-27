import "./index.css";

type Props = {
  id: number;
  large: string;
  medium: string;
  image: string;
  reverse: boolean;
};
const Card = ({ data }: { data: Props }) => {
  return (
    <div className={`carddiv ${data.reverse ? "" : "reverse"}`}>
      <div className="imgdiv">
        <img src={data.image} alt="" />
      </div>
      <div className="textdiv">
        <span className="large">{data.large}</span>
        <span className="medium">{data.medium}</span>
      </div>
    </div>
  );
};

export default Card;
