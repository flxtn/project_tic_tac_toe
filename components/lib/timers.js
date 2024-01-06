import { useEffect, useState } from "react";


export function useNow(interval, enabled) {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }
    const inter = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(inter);
    };
  }, [interval, enabled]);

  return now;
}


export function useInterval(interval, enabled, cb) {
  useEffect(() => {
      if (!enabled) {
        return;
      }
      const inter = setInterval(() => {
        cb(Date.now());
      }, interval);
  
      return () => {
        clearInterval(inter);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interval, enabled]);
}