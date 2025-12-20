import { useRef, useEffect } from "react";

const useRightPanel = (volume, setVolume) => {
  const volumeRef = useRef(null);

  useEffect(() => {
    if (!volumeRef.current) return;

    volumeRef.current.style.background = `
      linear-gradient(
        to right,
        #f72585 0%,
        #f72585 ${volume}%,
        #fff ${volume}%,
        #fff 100%
      )
    `;
  }, [volume]);

  const handleVolumeChange = value => {
    setVolume(Number(value));
  };

  return {
    volumeRef,
    handleVolumeChange
  };
};

export default useRightPanel;
