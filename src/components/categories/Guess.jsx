// import other Components
import Back from "./Back";

// import data
import { guessData } from "../../Data/guessData";

const Guess = () => {
  console.log("guessData-->", guessData);
  return (
    <div>
      <div className="back">
        <Back />
      </div>
      Guess
    </div>
  );
};

export default Guess;
