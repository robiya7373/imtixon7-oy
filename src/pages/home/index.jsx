import { useSelector } from "react-redux";
import BlogPosts from "./companents/BlogPosts";
import HomeCardComp from "./companents/HomeCardComp";
import HomeHeaderComp from "./companents/HomeHeaderComp";
import HomeProducts from "./companents/HomeProducts";

const HomePage = () => {
  const { data } = useSelector((state) => state.cart);
  console.log(data,'cart');
  return (
    <div className="home__page max-w-[1140px] w-[100%]  m-auto">
      <HomeHeaderComp />
      <HomeProducts />
      <HomeCardComp />
      <BlogPosts />
    </div>
  );
};

export default HomePage;
