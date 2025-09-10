import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import { useEffect } from "react";
import data from "./data/musicData";
import { setData } from "./redux/musicSlice";
import { useDispatch } from "react-redux";
import SongDescriptions from "./components/SongDescriptions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(data));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/song/:id" element={<SongDescriptions/>}/>
      </Route>
    </Routes>
  )
}

export default App;
