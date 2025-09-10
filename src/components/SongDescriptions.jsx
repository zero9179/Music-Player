import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SongDescriptions() {
  const selectedMusic = useSelector((state) => state.music.selected);
  // console.log(selectedMusic);

  return (
    <div className="relative overflow-hidden w-full h-full col-span-full flex gap-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-lg">
      {/* Back button */}
      <Link to="/">
        <button className="absolute top-1 right-2 text-xl">🔙</button>
      </Link>

      {/* Image Section */}
      <div className="ml-2 w-[40%] h-96 overflow-hidden rounded-xl shadow-md flex items-center justify-center bg-black/20">
        <img
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
          src={selectedMusic?.image}
          alt="cover"
        />
      </div>

      {/* Details Section */}
      <div className="w-[50%] h-full flex justify-center flex-col gap-6">
        {/* Title */}
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl text-yellow-400 capitalize">
            Title:
          </h1>
          <p className="font-medium text-2xl">{selectedMusic?.title}</p>
        </div>

        {/* Song */}
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl text-yellow-400 capitalize">
            Song:
          </h1>
          <p className="font-medium text-2xl">{selectedMusic?.song}</p>
        </div>

        {/* Singer */}
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl text-yellow-400 capitalize">
            Singer:
          </h1>
          <p className="font-medium text-2xl">{selectedMusic?.singer}</p>
        </div>

        {/* Description */}
        <div className="flex gap-2">
          <h1 className="mt-[3px] font-bold text-2xl text-yellow-400 capitalize">
            Description:
          </h1>
          <p className="font-medium text-2xl wrap-normal leading-relaxed text-gray-200">
            {selectedMusic?.description}
          </p>
        </div>
        <audio controls>
          <source src={selectedMusic.song} type="audio/mpeg" />
          {/* <source src="/songs/song1.mp3"/> */}
          {/* {console.log(selectedMusic?.song)} */}
        </audio>
      </div>
    </div>
  );
}

export default SongDescriptions;
