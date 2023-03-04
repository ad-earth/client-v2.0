import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import useViewport from './useViewport';

const SCROLL_DELTA = 87;
const HEADER_HEIGHT = 87;

export const useScrHeaderVisible = () => {
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
