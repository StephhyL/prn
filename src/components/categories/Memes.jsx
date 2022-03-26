import "../../stylesheets/css/Memes.css";
import { useState } from "react";
import { memesData } from "../../Data/memesData";
import Button from "@mui/material/Button";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Card from "../../UI/Card";
import Back from "./Back";
import { blue } from "@mui/material/colors";

function Memes() {
  const [currentJoke, setCurrentJoke] = useState(0);

  console.log("dadJokesData--->", memesData);

  const onLeftClick = () => {
    if (currentJoke > 0 && setCurrentJoke(currentJoke - 1)) {
    } else if (currentJoke === 0) {
      setCurrentJoke(memesData.length - 1);
    }
  };

  const onRightClick = () => {
    if (currentJoke === memesData.length - 1) {
      setCurrentJoke(0);
    } else {
      setCurrentJoke(currentJoke + 1);
    }
  };

  return (
    <div className="meme">
      <div className="backArrow">
        <div className="back">
          <Back />
        </div>
      </div>
      <Card className="meme-joke">
        <img src={memesData[currentJoke].meme} width="500" />

        {/* <h1 className="joke-text">{memesData[currentJoke].meme}</h1> */}
      </Card>
      <div className="arrow-container">
        <div className="left-click">
          <Button
            className="backNext"
            onClick={() => onLeftClick()}
            color="primary"
            // variant="variant"
            sx={{ color: blue[500] }}
            aria-label="add"
          >
            <ArrowBackSharpIcon classname="arrow-icon large" />
          </Button>
        </div>

        <div className="right-click">
          <Button
            className="backNext"
            onClick={() => onRightClick()}
            // variant="variant"
            size="large"
            // sx={{ boxShadow: 3 }}
            color="primary"
            aria-label="add"
          >
            <ArrowForwardSharpIcon classname="arrow-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Memes;
