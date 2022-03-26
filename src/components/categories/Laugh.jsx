import { useState, useEffect } from "react";

// import other Components
import Back from "./Back";

// import local media
import laughSound from "../docs/Laugh_Track.mp3";
import haha from "./cateImages/haha.png";
// import haha from "./cateImages/haha.jpeg";
import haha2 from "./cateImages/haha.png";

// import styling
import "../../stylesheets/css/Laugh.css";

const Laugh = () => {
  const [isHaha, setIsHaha] = useState(true);
  // const [playing, setPlaying] = useState(false);

  const audio = new Audio(laughSound);
  // const audio = new Audio(
  //   "https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3"
  // );

  audio.volume = 0.05;

  // const toggle = () => setPlaying(!playing);

  const handleClick = (e) => {
    e.preventDefault();
    setIsHaha(isHaha ? false : true);
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 2000);
  };

  return (
    <div className="laugh">
      <div className="back">
        <Back />
      </div>
      <div className="hahaImgBtn">
        {/* <span>Hello From Laugh</span> */}
        <div onClick={handleClick}>
          {!isHaha && (
            <img src={haha} className="haha" width="800" height="800" />
          )}
          {isHaha && (
            <img src={haha2} className="haha" width="240" height="240" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Laugh;
