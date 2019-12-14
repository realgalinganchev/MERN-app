
import React from "react";
import SliderLoader from "react-content-loader";

const ContentLoader = (props) => {

  return (
    <SliderLoader height="500">
      height={4}
      width={400}
      speed={1}
      primaryColor="rgba(0,0,0,0.06)"
      secondaryColor="rgba(0,0,0,0.12)"
    >
        <rect x="-26" y="122" rx="0" ry="0" width="77" height="50" />
      <rect x="0" y="137" rx="0" ry="0" width="45" height="47" transform="rotate(318, 20, 115)" />
      <rect x="235" y="67" rx="0" ry="0" width="0" height="0" />
      <rect x="233" y="65" rx="0" ry="0" width="0" height="0" />
    </SliderLoader>
  )
}

export default ContentLoader