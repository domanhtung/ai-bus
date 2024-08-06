import Image from "next/image";
import { blogList } from "../constants/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

const Blogs = () => {
  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-8 py-12 xl:py-24">
      <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">latest Blog</span>
      </div>
      <h3 className="pt-4 xl:pt-6 text-[30px] lg:text-[44px] xl:text-[60px] font-bold leading-[34px] lg:leading-[50px] xl:leading-[72px] opacity-[0.86] hover:scale-105 duration-200">
        Tech Insights and Behind-the-Scenes Stories
      </h3>

      <div className="pt-10 xl:pt-[72px]">
        <Swiper
          slidesPerView={1}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, EffectCoverflow, Autoplay]}
        >
          {blogList?.map((blog, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={blog?.img}
                    className="w-full h-[300px] xl:h-[350px] bg-white bg-opacity-[0.04] object-cover rounded-xl overflow-hidden"
                    width={466}
                    height={350}
                    priority
                    alt="img blog"
                  />
                  <div className="py-[18px]">
                    <div className="text-white xl:text-[18px] font-medium opacity-[0.86]">
                      {blog?.title}
                    </div>
                    <p className="pt-2 xl:pt-4 text-[12px] font-medium text-white opacity-[0.48] limited-2-line">
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="grid lg:grid-cols-3 gap-10 lg:gap-6 pt-10 xl:pt-[72px]">
        {blogList?.map((blog, index) => {
          return (
            <div key={index}>
              <Image
                src={blog?.img}
                className="w-full h-[300px] xl:h-[350px] bg-white bg-opacity-[0.04] object-cover rounded-xl overflow-hidden"
                width={466}
                height={350}
                priority
                alt="img blog"
              />
              <div className="py-[18px]">
                <div className="text-white xl:text-[18px] font-medium opacity-[0.86]">
                  {blog?.title}
                </div>
                <p className="pt-2 xl:pt-4 text-[12px] font-medium text-white opacity-[0.48]">
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
      </div> */}
    </div>
  );
};

export default Blogs;
