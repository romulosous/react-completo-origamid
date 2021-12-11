import React from "react";

const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  });

  return <video src="https://youtube.com" ref={video}></video>;
};

export default App;
