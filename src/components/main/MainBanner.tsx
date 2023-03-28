import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/carousel.css';
import { BANNER } from '../../constants';
import useViewport from '../../hooks/useViewport';
import * as t from '../../style/mainBanner.style';

export default function MainBanner() {
  const navigate = useNavigate();
  const viewport = useViewport();

  const handleClick = (category: string) => navigate(`/list/${category}`);

  return (
    <Slider {...SETTING}>
      {BANNER.map(({ id, category, url1, url2 }) => (
        <t.BannerImg
          key={id}
          onClick={() => handleClick(category)}
          src={viewport > 990 ? url1 : url2}
          alt="배너"
        />
      ))}
    </Slider>
  );
}

const SETTING = {
  autoplaySpeed: 3000,
  autoplay: true,
  dotsClass: 'dotsCustom',
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots: React.ReactNode) => (
    <t.DotsWrapper>
      <ul>{dots}</ul>
    </t.DotsWrapper>
  ),
};
