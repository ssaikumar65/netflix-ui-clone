import ArrowBackIosNewOutlined from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState, useEffect, useCallback } from "react";
import { data } from "../../api/movies";
import ListItem from "../ListItem";
import "./index.css";

const List = ({ heading }: { heading: string }) => {
  const listRef = useRef<HTMLDivElement>(document.createElement("div"));
  const [sliderIndex, setSliderIndex] = useState(0);
  const [page, setPage] = useState(5);

  useEffect(() => {
    const index = parseInt(
      getComputedStyle(listRef.current).getPropertyValue("--cards")
    );
    setPage(index);
  }, []);

  const handleClick = (direction: string) => {
    const index = parseInt(
      getComputedStyle(listRef.current).getPropertyValue("--slider-index")
    );

    if (direction === "left") {
      listRef.current.style.setProperty(
        "--slider-index",
        (index - 1).toString()
      );
      setSliderIndex(index - 1);
    }
    if (direction === "right") {
      listRef.current.style.setProperty(
        "--slider-index",
        (index + 1).toString()
      );
      setSliderIndex(index + 1);
    }
    if (
      sliderIndex === Math.ceil(data.total / page) - 1 &&
      direction === "right"
    ) {
      listRef.current.style.setProperty("--slider-index", "0");
      setSliderIndex(0);
    }
  };

  const onHover = useCallback(() => {
    const index = parseInt(
      getComputedStyle(listRef.current).getPropertyValue("--cards")
    );
    setPage(index);
  }, []);

  return (
    <div onMouseEnter={onHover} className="list">
      <div className="list-header">
        <span className="listTitle">{heading}</span>
        <div className="pagination">
          {[...Array(Math.ceil(data.total / page))].map((_, index) => (
            <div
              key={index}
              className={sliderIndex === index ? "bar active" : "bar"}
            ></div>
          ))}
        </div>
      </div>
      <div className="container">
        <div
          onClick={() => handleClick("left")}
          className={
            sliderIndex === 0 ? "sliderArrow" : "sliderArrow left active"
          }
        >
          <ArrowBackIosNewOutlined fontSize="large" />
        </div>
        <div className="slider" ref={listRef}>
          {data.results.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
        <div
          onClick={() => handleClick("right")}
          className={"sliderArrow right active"}
        >
          <ArrowForwardIos fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default List;
