import React from "react";
import MusicCard from "./components/MusicCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "./redux/musicSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const musicData = useSelector((state) => state.music.data);

  function handleNavigate(id){
    console.log("id",id)
    navigate(`/song/${id}`)
  }
  return (
    <>
      {musicData?.map((item, idx) => (
        <div
          onClick={() => dispatch(setSelected(item))}
          onDoubleClick={() => handleNavigate(item?.id)}
          key={idx}
          className="flex justify-center items-center active:translate-y-[1px]"
        >
          <MusicCard items={item} />
        </div>
      ))}
    </>
  );
}

export default Home;
