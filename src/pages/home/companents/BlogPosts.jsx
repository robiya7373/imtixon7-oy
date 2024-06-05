import blogData from "../../../utils/blogData";

const BlogPosts = () => {
  return (
    <div className="">
      <h1 className="text-center text-[#3d3d3d] font-mavenpro text-[30px] font-bold leading-[16px]">Our Blog Posts</h1>
      <p className="text-center my-[35px] mx-auto mt-[15px] text-[#727272] font-mavenpro text-[14px] font-normal leading-[24px]">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className=" flex mb-[100px] justify-between">
        {blogData.map((item) => (
          <div className=" bg-[#fbfbfb]" key={item.id}>
            <div className="w-[268px] h-[195px]">
              <img src={item.image} alt={item.title} className=" w-full h-full object-cover" />
            </div>
            <div className="">
              <p className="text-[#46a358] font-mavenpro text-[14px] font-medium leading-[16px] my-[8px] mx-[15px]">
                Septembet {item.date} | Read in {item.view} minutes
              </p>
              <h2 className="max-w-[230px] my-[5px] mx-[15px] text-[#3d3d3d] font-mavenpro text-[20px] font-bold leading-[26px]">{item.title}</h2>
              <p className="max-w-[240px] my-0 mx-[15px] text-[#727272] font-mavenpro text-[14px] font-normal leading-[22px]">{item.text}</p>
              <button className="border-none bg-transparent my-[13px] mx-[15px] text-[#3d3d3d] font-mavenpro text-[14px] font-medium leading-[16px] transition-transform duration-500 hover:text-[#46a358] hover:scale-110">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
