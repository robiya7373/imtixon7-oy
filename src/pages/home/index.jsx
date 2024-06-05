import BlogPosts from "./companents/BlogPosts";
import HomeCardComp from "./companents/HomeCardComp";
import HomeHeaderComp from "./companents/HomeHeaderComp";
import HomeProducts from "./companents/HomeProducts";

const HomePage = () => {
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
