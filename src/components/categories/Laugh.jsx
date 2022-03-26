import { useState } from "react";

import "../../stylesheets/css/Laugh.css";
import haha from "./haha.png";
import haha2 from "./haha2.jpeg";

const Laugh = () => {
  const [isHaha, setIsHaha] = useState(true);
  const [playing, setPlaying] = useState(false);

  const audio = new Audio(
    "https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3"
  );

  audio.volume = 0.05;

  const toggle = () => setPlaying(!playing);

  const handleClick = (e) => {
    e.preventDefault();
    setIsHaha(isHaha ? false : true);
    toggle();
    playing ? audio.play() : audio.stop();
  };

  return (
    <div className="laugh">
      <span>Hello From Laugh</span>
      <div onClick={handleClick}>
        {isHaha && <img src={haha} className="haha" width="240" height="240" />}
        {!isHaha && (
          <img src={haha2} className="haha" width="240" height="240" />
        )}
      </div>
    </div>
  );
};

export default Laugh;
