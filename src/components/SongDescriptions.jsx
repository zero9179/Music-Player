import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SongDescriptions() {
  const selectedMusic = useSelector((state) => state.music.selected);

  return (
    <div className="relative w-full h-[calc(100vh-90px)] flex flex-col md:flex-row  gap-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-4 md:p-6">
      {/* Back button */}
      <Link to="/">
        <button className="absolute top-2 right-3 text-2xl hover:scale-110 transition-transform z-10">
          🔙
        </button>
      </Link>

      {/* Image */}
      <div className="w-full md:w-[40%] max-h-[60vh] overflow-hidden rounded-xl shadow-md flex items-center justify-center bg-black/20">
        <img
          className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
          src={selectedMusic?.image}
          alt={selectedMusic?.title || "cover"}
        />
      </div>

      {/* Details */}
      <div className="w-full md:w-[55%] flex-1 flex flex-col justify-start md:justify-center gap-4 md:gap-6 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h1 className="font-bold text-xl md:text-2xl text-yellow-400">
            Title:
          </h1>
          <p className="font-medium text-lg md:text-2xl break-words">
            {selectedMusic?.title}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h1 className="font-bold text-xl md:text-2xl text-yellow-400">
            Song:
          </h1>
          <p className="font-medium text-lg md:text-2xl break-words">
            {selectedMusic?.song}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h1 className="font-bold text-xl md:text-2xl text-yellow-400">
            Singer:
          </h1>
          <p className="font-medium text-lg md:text-2xl break-words">
            {selectedMusic?.singer}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl md:text-2xl text-yellow-400">
            Description:
          </h1>
          <p className="font-medium text-base md:text-xl leading-relaxed text-gray-200 overflow-y-auto break-words">
            {selectedMusic?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SongDescriptions;
