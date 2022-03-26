import { useState } from "react";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
// import other Components
import Back from "./Back";
import Card from "../../UI/Card";

// import data
import { roastData } from "../../Data/roastData";

// import styling
import "../../stylesheets/css/Roast.css";
import Button from "@mui/material/Button";

const Roast = () => {
  const [currentJoke, setCurrentJoke] = useState(0);
  console.log('ROAST===>', roastData)
  
  const onLeftClick = () => {
    if (currentJoke > 0 && setCurrentJoke(currentJoke - 1)) {
    } else if (currentJoke === 0) {
      setCurrentJoke(roastData.length - 1);
    }
  };

  const onRightClick = () => {
    if (currentJoke === roastData.length - 1) {
      setCurrentJoke(0);
    } else {
      setCurrentJoke(currentJoke + 1);
    }  
  };

  return (
    <div className="roastData">
      <div className="backArrow">
        <div className="back">
          <Back />
        </div>
      </div>
      
      <Card className="roast-joke">
        <h1 className="joke-text">{roastData[currentJoke].roasts}</h1>
      </Card>
     
        
        
        <div className="arrow-container">
        <div className="left-click">
          <Button
            onClick={() => onLeftClick()}
            variant="contained"
            size="large"
            endIcon={<ArrowBackSharpIcon />}
          ></Button>
        </div>

        <div className="right-click">
          <Button
            onClick={() => onRightClick()}
            variant="contained"
            size="large"
            startIcon={<ArrowForwardSharpIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Roast;
