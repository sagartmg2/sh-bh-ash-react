import React from "react";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Banner() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} -translate-x-[100px]`}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} translate-x-[100px]`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  /* assume as api data  */
  let bannerData = [
    {
      image: "/banner-images/banner-1.png",
      title: "New Furniture Collection Trends in 2020",
      subTitle: "Best Furniture For Your Castle....",
      redirectLink: "https://www.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus veritatis amet porro, ipsa consequuntur quam architecto optio laborum modi blanditiis quae quisquam pariatur tempora quaerat inventore nobis iusto itaque.",
    },
    {
      image: "/banner-images/banner-2.png",
      title: "Second  Furniture Collection Trends in 2020",
      subTitle: "Best Furniture For Your Castle....",
      redirectLink: "https://www.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus veritatis amet porro, ipsa consequuntur quam architecto optio laborum modi blanditiis quae quisquam pariatur tempora quaerat inventore nobis iusto itaque.",
    },
    {
      image: "/banner-images/banner-3.png",
      title: "Third  Furniture Collection Trends in 2020",
      subTitle: "Best Furniture For Your Castle....",
      redirectLink: "https://www.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus veritatis amet porro, ipsa consequuntur quam architecto optio laborum modi blanditiis quae quisquam pariatur tempora quaerat inventore nobis iusto itaque.",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {bannerData.map((el) => {
          return (
            <>
              <div
                className="bg-[url('/banner-images/banner-1.png')]] relative h-[564px]  bg-contain md:bg-cover bg-center bg-no-repeat md:h-[764px]"
                style={{
                  backgroundImage: `url('${el.image}')`,
                }}
              >
                <div className="container flex h-full items-center">
                  <div className="">
                    <p className="font-bold text-secondary mb-3">{el.subTitle}</p>
                    <h2 className="mb-3 text-[53px] font-bold max-w-[644px] tracking-[1.06px]]" >{el.title}</h2>
                    <p className="mb-3">{el.description}</p>
                    <button type="button" className="btn">
                      Shop now 
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}
