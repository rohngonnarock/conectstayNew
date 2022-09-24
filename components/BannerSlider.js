import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const BannerSlider = () => {
  return (
    <Slider {...settings}>
      <div className="first_slide">
        <img alt="" src="/travel-banner.png" />
      </div>
      <div>
        <img alt="" src="/slider-2.jpg" />
      </div>
      <div>
        <img alt="" src="/slider-3.jpg" />
      </div>
      <div>
        <img alt="" src="/slider-4.jpg" />
      </div>
      <div>
        <img alt="" src="/slider-5.jpg" />
      </div>
      <div>
        <img alt="" src="/slider-6.jpg" />
      </div>
    </Slider>
  );
};

export default BannerSlider;
