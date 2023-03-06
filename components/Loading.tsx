import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      
      <Oval
  height={80}
  width={80}
  color="#4826a7"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#5142a3"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
      </div>
   
  );
};

export default Loading;
