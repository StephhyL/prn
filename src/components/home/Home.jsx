
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


// import from other components
import Header from "./Header";
import Category from "./Category";

// import images
import { images } from "./images.js";

// import styling
import "../../stylesheets/css/Home.css";

const Home = () => {
  const [catList, setCatList] = useState(images);

  const parseList = catList.map((cat) => (
    <Category key={uuidv4()} catImg={cat.img} name={cat.name} />
  ));

  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <div className="catLayout">{parseList}</div>
    </div>
  );
};

export default Home;
