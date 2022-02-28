  
import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
      }}
      data-ad-client="ca-pub-6204542530772663"
      data-ad-slot="1760610555"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;