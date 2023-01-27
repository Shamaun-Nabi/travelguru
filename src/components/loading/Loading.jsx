import React from "react";
import "@lottiefiles/lottie-player";

function Loading() {
  return (
    <div className="h-screen flex justify-center bg-slate-200">
      <div>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json"
          style={{ width: 320 }}
        ></lottie-player>
      </div>
    </div>
  );
}

export default Loading;
