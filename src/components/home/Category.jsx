// import styling
import "../../stylesheets/css/Category.css";

const Category = (props) => {
  const { catImg } = props;

  // console.log("catImg --> ", catImg);

  const handleClick = (e) => {
    e.preventDefault();
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
