import loadingGIF from "../../Assets/Spinner/pokeballSpinner.gif";
import { GIF, LoadingContainer, LoadingBar } from "./StyledLoading";
import { useState, useEffect } from "react";

const Loading = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => prev + 5);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContainer>
      <GIF src={loadingGIF} alt="Loading..." />
      <LoadingBar width={loadingProgress} />
    </LoadingContainer>
  );
};

export default Loading;
