import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const useIsTablet = () => {
  const { width } = useWindowSize();
  const [isTablet, setIsTablet] = useState(width < 822);

  useEffect(() => {
    setIsTablet(width < 1025);
  }, [width]);

  return isTablet;
};

export default useIsTablet;
