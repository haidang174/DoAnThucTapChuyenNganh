import { useRef, useEffect } from "react";

const useCenterPanel = (currentTime, duration) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (!progressRef.current) return;

    const percent = duration ? (currentTime / duration) * 100 : 0;
    progressRef.current.style.background = `
      linear-gradient(
        to right,
        #f72585 0%,
        #f72585 ${percent}%,
        #fff ${percent}%,
        #fff 100%
      )
    `;
  }, [currentTime, duration]);

  const formatTime = time => {
    if (!time) return "00:00";

    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");

    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return {
    progressRef,
    formatTime
  };
};

export default useCenterPanel;
