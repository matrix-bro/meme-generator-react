import { useEffect, useState } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting up");
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    // Cleaning Up
    return () => {
      console.log("Cleaning up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div className="m-3">
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};

export default WindowTracker;
