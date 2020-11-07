import classNames from "classnames";
import Image from "next/image";
import React from "react";

const UnitCard = ({ unit }) => {
  const { module, title, coverImage } = unit;
  const textClass = classNames({
    "m-4 sm:m-8 flex flex-col": true,
    "absolute bottom-0 left-0": coverImage,
  });

  return (
    <div className="mb-4 flex bg-gray-100 relative">
      {coverImage && <Image src={coverImage} width="837" height="305" />}
      <div className={textClass}>
        {module && (
          <p className="place-self-start bg-blue-500 text-white py-1 px-3 text-sm inline">
            {module}
          </p>
        )}
        <h2 className="inline py-1 px-3 text-lg text-white bg-gray-600 md:text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default UnitCard;
