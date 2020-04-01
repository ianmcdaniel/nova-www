import { useEffect } from 'react';

const useScrollTo = ({ left = 0, top = 0 } = {}) => {
  useEffect(() => {
    window.scroll({
      behavior: 'smooth',
      left,
      top,
    });
  }, [left, top]);
};

export default useScrollTo;
