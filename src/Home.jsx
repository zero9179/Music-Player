import React from "react";
import MusicCard from "./components/MusicCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "./redux/musicSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const musicData = useSelector((state) => state.music.data);

  function handleNavigate(item) {
    dispatch(setSelected(item));
    navigate(`/song/${item.id}`);
  }

  return (
    <div className="w-full h-full p-4 sm:p-6 ">
      {/* 2 columns by default, 4 columns on md and up */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {musicData?.map((item) => (
          <div
            onClick={() => handleNavigate(item)}
            key={item.id}
            className="active:translate-y-[1px] cursor-pointer"
          >
            <MusicCard items={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
