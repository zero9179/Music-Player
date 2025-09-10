import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";
const musicSlice = createSlice({
  name: "music",
  initialState: {
    data: [],
    selected: {},
    play: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    nextSong: (state) => {
      let idx = state.data.findIndex((item) => item.id === state.selected.id);
      let next = idx + 1;
      if (next === state.data.length) {
        return 
      }
      state.selected = state.data[next];
    },
    prevSong: (state) => {
      let idx = state.data.findIndex((item) => item.id === state.selected.id);
      let prev = idx - 1;
      if (prev < 0) {
        return 
      }
      state.selected = state.data[prev];
    },

  },
});
export const { setData, setSelected, nextSong, prevSong } = musicSlice.actions;

export default musicSlice.reducer;
