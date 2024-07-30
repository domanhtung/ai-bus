import Image from "next/image";
import { blogList } from "../constants/home";

const Blogs = () => {
  return (
    <div className="max-w-[1512px] mx-auto px-8 py-24">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">latest Blog</span>
      </div>
      <h3 className="pt-6 text-[60px] font-bold leading-[72px] opacity-[0.86] hover:scale-105 duration-200">
        Tech Insights and Behind-the-Scenes Stories
      </h3>
      <div className="grid grid-cols-3 gap-6 pt-[72px]">
        {blogList?.map((blog) => {
          return (
            <div key={blog?.title}>
              <Image
                src={blog?.img}
                className="w-full h-[350px] bg-white bg-opacity-[0.04] object-cover rounded-xl overflow-hidden"
                width={466}
                height={350}
                priority
                alt="img blog"
              />
              <div className="py-[18px]">
                <div className="text-white text-[18px] font-medium opacity-[0.86]">
                  {blog?.title}
                </div>
                <p className="pt-4 text-[12px] font-medium text-white opacity-[0.48]">
                  {blog?.content}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={"/images/home/aliens.svg"}
                  width={24}
                  height={24}
                  priority
                  alt="author"
                />
                <div>
                  <div className="text-[14px] font-medium text-white opacity-[0.86]">
                    {blog?.author}
                  </div>
                  <div className="pt-1 text-[12px] font-medium text-white opacity-[0.48]">
                    {blog?.date}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
