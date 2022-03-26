import { useNavigate } from "react-router-dom";
// import styling
import "../../stylesheets/css/Category.css";

const Category = (props) => {
  const { catImg, name} = props;
  const navigate = useNavigate();

  // console.log("catImg --> ", catImg);


  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${name}`);
  };

  return (
    <div className="category" onClick={handleClick}>
      <img
        src={catImg}
        className="logo"
        alt="prn-logo"
        width="125"
        // height="200"
      />
      
    </div>
  );
};

export default Category;
