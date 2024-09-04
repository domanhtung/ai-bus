import { blogsList } from "@/app/constants/blogs";
import Image from "next/image";

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blog = blogsList?.find((value) => value?.key === slug);
  return null;

  return (
    <section className="py-6 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <div className="grid lg:flex gap-4 justify-between">
        <h1 className="text-[40px] leading-[48px] font-semibold text-white opacity-[0.86] hover:scale-105 duration-200">
          {blog?.title}
        </h1>
        <div className="flex min-w-fit gap-2 items-center">
          <Image
            src={"/images/home/aliens.svg"}
            width={24}
            height={24}
            priority
            alt="author"
          />
          <div>
            <div className="text-[14px] font-medium text-white opacity-[0.86] whitespace-nowrap">
              {blog?.writer}
            </div>
            <div className="pt-1 text-[12px] font-medium text-white opacity-[0.48]">
              {blog?.createAt?.toLocaleDateString("en-GB")}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={blog?.previewImg || ""}
        className="w-full h-auto rounded-xl mt-6 mb-12 lg:mt-14 lg:mb-[96px]"
        width={1448}
        height={480}
        priority
        alt="preview"
      />
      <div
        className="blog-content max-w-[835px]"
        dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
      />
    </section>
  );
};

export default BlogDetail;
