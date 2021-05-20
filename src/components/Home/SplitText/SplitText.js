import React from "react";

const SplitText = (props) => {
  return (
    
      <span aria-label={props.copy} role={props.role} className="mr-2 md:mr-4">
        {props.copy.split("").map(function (char, index) {
          return (
            <span aria-hidden="true" key={index} className="animationRb inline-block hover:text-secondary ">
              {char}
            </span>
          );
        })}
      </span>
   
  );
};

export default SplitText;