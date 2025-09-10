import { createSlice } from "@reduxjs/toolkit";

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
      const idx = state.data.findIndex((item) => item.id === state.selected.id);
      const next = idx + 1;
      if (next < state.data.length) {
        state.selected = state.data[next];
      }
    },
    prevSong: (state) => {
      const idx = state.data.findIndex((item) => item.id === state.selected.id);
      const prev = idx - 1;
      if (prev >= 0) {
        state.selected = state.data[prev];
      }
    },
  },
});

export const { setData, setSelected, nextSong, prevSong } = musicSlice.actions;
export default musicSlice.reducer;
