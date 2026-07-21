
import Slider from "react-slick";
import img1 from "../../assets/atm card.png";


const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  
  };
    return (
      <div>
        <Slider {...settings}>
            <div className='flex'>
            <img src={img1} alt="" />
            <h1>bjbbm bm</h1>
            </div>
        </Slider>
      </div>
    )
  }
  
  export default Carousel
  