import { blogsList } from "@/app/constants/blogs";
import { navbarUrl } from "@/app/constants/home";
import Image from "next/image";
import Link from "next/link";

const BlogsList = () => {
  return (
    <section className="py-6 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <div className="grid gap-4 lg:gap-14">
        {blogsList?.map((blog) => {
          return (
            <div
              key={blog?.key}
              className="grid lg:grid-cols-2 gap-7 lg:gap-10 xl:gap-[124px]"
            >
              <div className="pt-6">
                <Link href={`${navbarUrl?.blogs}/${blog?.key}`}>
                  <h2 className="text-[20px] leading-[28px] lg:text-[30px] lg:leading-[44px] font-semibold text-white opacity-[0.86] hover:scale-105 duration-200">
                    {blog?.title}
                  </h2>
                </Link>
                <p className="mt-4 mb-6 text-[16px] leading-[28px] font-medium text-white opacity-[0.48] blog-list-short-des">
                  {blog?.shortDes}
                </p>

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
                      {blog?.writer}
                    </div>
                    <div className="pt-1 text-[12px] font-medium text-white opacity-[0.48]">
                      {blog?.createAt?.toLocaleDateString("en-GB")}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={blog?.previewImg}
                  className="w-full h-[240px] lg:h-[496px] object-cover rounded-xl"
                  width={662}
                  height={496}
                  priority
                  alt="preview"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogsList;
