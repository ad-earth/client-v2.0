import * as t from '../style/mainBanner.style';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/carousel.css';
import useViewport from '../hooks/useViewport';
import { banner } from '../shared/utils/imgUrls';

const MainBanner = () => {
  const navigate = useNavigate();
  const viewport = useViewport();

  return (
    <Slider {...carouselSetting}>
      {banner.map(({ id, category, url1, url2 }) => (
        <t.BannerImg
          key={id}
          onClick={() => navigate(`/list/${category}`)}
          src={viewport > 990 ? url1 : url2}
          alt="배너"
        />
      ))}
    </Slider>
  );
};

const carouselSetting = {
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

export default MainBanner;
