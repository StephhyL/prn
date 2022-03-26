// import other Components
import Back from "./Back";

// import data
import { roastData } from "../../Data/roastData";

// import styling
import "../../stylesheets/css/Roast.css";

const Roast = () => {
  console.log("roastData--->", roastData);
  return (
    <div>
      <div className="back">
        <Back />
      </div>
      Roast
    </div>
  );
};

export default Roast;
