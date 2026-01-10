import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './slider.scss';

function Slider() {
  const settings = {
    showArrows: false,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    autoPlay: true,
    swipeable: true,
    emulateTouch: true,
    transitionTime: 1000,
    interval: 3000,
  };

  return (
    <Carousel
      {...settings}
      className='slider'>
        <div className='slider_item' id='slide1'/>
        <div className='slider_item' id='slide2'/>
        <div className='slider_item' id='slide3'/>
        <div className='slider_item' id='slide4'/>
        <div className='slider_item' id='slide5'/>
    </Carousel>
  );
}

export default Slider;