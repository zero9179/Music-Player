import React from "react";

function MusicCard({ items }) {
  const { title, singer, time, image } = items;

  return (
    <div className="w-36 sm:w-44 md:w-56 lg:w-64 h-56 sm:h-64 md:h-80 bg-zinc-900 border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="w-full h-[55%] bg-black overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>

      {/* Details */}
      <div className="text-white h-[45%] px-2 py-2 flex flex-col justify-center gap-1 sm:gap-2">
        <h1 className="text-xs sm:text-sm md:text-base font-semibold truncate">
          {title}
        </h1>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 truncate">
          {singer}
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">
          {time}
        </p>
      </div>
    </div>
  );
}

export default MusicCard;
