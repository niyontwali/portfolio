import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Skeleton = () => {
  return (
    <>
      <FontAwesomeIcon className="spinner text-5xl" icon={faSpinner} />
    </>
  );
};

export default Skeleton;
