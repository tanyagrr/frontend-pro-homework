import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

async function fetchSwapi(path= "") {
  const res = await fetch(`https://swapi.info/api/${path}`);
  if (!res.ok) {
    throw new Error("Failed to fetch SWAPI");
  }
  const data = await res.json();

    return {
        payload: data,
        path,
    };
}

export const fetchSwapiThunk = createAsyncThunk(
  "swapi/fetch",
  async (path, thunkAPI) => {
    try {
      return await fetchSwapi(path);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const swapiSlice = createSlice({
    name: "swapi",
    initialState: {
        isLoading: false,
        data: {type: null, id: null, payload: null},
        error: null,
    },
    reducers: {
        clearData(state) {
            state.data = { type: null, id: null, payload: null };
            state.error = null;
    },
    },
    extraReducers: (builder) => {
        builder
      .addCase(fetchSwapiThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSwapiThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        const [type, id] = action.payload.path.split("/");

        state.data = {
            type,
            id,
            payload: action.payload.payload,
  };
      })
      .addCase(fetchSwapiThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
    }
})

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;