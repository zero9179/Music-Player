import React from "react";

function MusicCard({ items }) {
  const { title, song, singer, time, description, image } = items;
  return (
    <div className="w-40 h-60 md:w-56 md:h-80 bg-zinc-900 border-2 border-white rounded-lg overflow-hidden">
      <div className="w-full h-[60%]  bg-red-100 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="image" />
      </div>
      <div className="text-white h-[40%] px-2 pt-3 flex flex-col gap-2">
        <h1 className="font-bold">
          Singer: <span className="font-light">{singer}</span>
        </h1>
        <h1 className="font-bold">
          Title: <span className="font-light">{title}</span>
        </h1>
        <h1 className="font-bold">
          Time: <span className="font-light">{time}</span>
        </h1>

      </div>
    </div>
  );
}

export default MusicCard;
