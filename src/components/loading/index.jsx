import React from "react";
import { LoadingElement, LoadingElementSVG } from "./styles";

const Loading = () => {
  // return <div className="loading"></div>;
  return (
    <LoadingElement>
      <LoadingElementSVG />
    </LoadingElement>
  );
};

export default Loading;
