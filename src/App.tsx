import React, { useState, useEffect } from "react";
import { Image } from "react-native";

const imgSrc =
  "https://api.chat2see.me/images/conversations/f4e6de61-e7c7-42b6-8a43-fa5fa0580578/dH5NLnNzleQ33zTDPY3gBXDSK5X2.jpg";

let t = 1;

const size = 200;

export const App: React.FC = () => {
  const [src, setSrc] = useState(imgSrc);

  useEffect(() => {
    let i = setInterval(() => {
      console.log(t);
      if (t >= 5) clearInterval(i);
      setSrc(imgSrc + "?t=" + t++);
    }, 500);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <Image
      style={{ width: 200, height: size }}
      resizeMode="cover"
      source={{ uri: src }}
    />
  );
};
