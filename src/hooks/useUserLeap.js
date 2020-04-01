import { useEffect } from 'react';

export const createInstance = appId => {
	/* eslint-disable */
  (function(l,e,a,p) {
    window.UserLeap = function(){U._queue.push(arguments)}
    let U = window.UserLeap;U.appId = a;U._queue = [];
    a=l.createElement('script');
    a.async=1;a.src=e+'?id='+U.appId;
    p=l.getElementsByTagName('script')[0];
    p.parentNode.insertBefore(a, p);
  })(document, 'https://cdn.userleap.com/shim.js', appId);
  /* eslint-enable */

	return window.UserLeap;
};

const useUserLeap = appId => {
  useEffect(() => {
    createInstance(appId);
  }, [appId]);

  return null;
};

export const trackUserLeapEvent = eventName => {
  if (window.UserLeap) {
    window.UserLeap('track', eventName);
  };
};

export default useUserLeap;
