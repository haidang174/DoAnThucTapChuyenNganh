import { useLocation } from "react-router-dom";

const useMainContent = () => {
  const location = useLocation();
  const path = location.pathname;

  return { path };
};

export default useMainContent;
