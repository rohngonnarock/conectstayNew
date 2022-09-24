
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const BannerSlider = () => {
    return(
        <Slider {...settings}>
            <div className="first_slide"><img src="/travel-banner.png" /></div>
            <div><img src="/slider-2.jpg" /></div>
            <div><img src="/slider-3.jpg" /></div>
            <div><img src="/slider-4.jpg" /></div>
            <div><img src="/slider-5.jpg" /></div>
            <div><img src="/slider-6.jpg" /></div>
        </Slider>
    )
}

export default BannerSlider