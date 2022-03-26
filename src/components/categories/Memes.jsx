// import other Components
import Back from "./Back";

// import data
import { memesData } from "../../Data/memesData";

// import stylesheet
import "../../stylesheets/css/Memes.css";

const Memes = () => {
  console.log("memesData--->", memesData);
  return (
    <div>
      <div className="back">
        <Back />
      </div>
      Memes
    </div>
  );
};

export default Memes;
