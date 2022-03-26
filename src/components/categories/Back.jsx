import { useNavigate } from "react-router-dom";

import BackImg from "./cateImages/back.png";

const Back = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={BackImg}
        className="haha"
        width="30"
        height="30"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Back;
