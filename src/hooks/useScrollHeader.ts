import throttle from 'lodash/throttle';
import { useEffect, useState } from 'react';
import { HEADER_HEIGHT, SCROLL_DELTA } from '../constants';
import useViewport from './useViewport';

const useScrHeader = () => {
  const viewport = useViewport();
  const [previousScroll, setPreviousScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = throttle(() => {
      const currentScroll = window.pageYOffset;

      if (Math.abs(previousScroll - currentScroll) <= SCROLL_DELTA) {
        return;
      }

      if (
        viewport >= 990 &&
        currentScroll > previousScroll &&
        currentScroll > HEADER_HEIGHT
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPreviousScroll(currentScroll);
    }, 300);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return {
    isHeaderVisible: isVisible,
  };
};

export default useScrHeader;
