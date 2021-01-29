import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { facebookLogin, getInfo, githubLogin, googleLogin, localLogin } from "../api";
import { setLoading } from "./isLoadingReducer";

export const userLocalLogin = createAsyncThunk(
  "user/loginLocal",
  async ({ email, password }: any, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    const res = await localLogin(email, password);
    dispatch(setLoading(false));
    if (res.data.success === false) return rejectWithValue(null);
    return res.data;
  }
);

export const userFacebookLogin = createAsyncThunk(
  "user/facebookLogin",
  async (access_token: string, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    const res = await facebookLogin(access_token);
    dispatch(setLoading(false));
    if (res.data.success === false) return rejectWithValue(null);
    return res.data;
  }
);

export const userGoogleLogin = createAsyncThunk(
  "user/googleLogin",
  async (access_token: string, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    console.log(access_token);
    const res = await googleLogin(access_token);
    dispatch(setLoading(false));
    if (res.data.success === false) return rejectWithValue(null);
    return res.data;
  }
);

export const userGithubLogin = createAsyncThunk(
  "user/githubLogin",
  async (code: string, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    const res = await githubLogin(code);
    dispatch(setLoading(false));
    if (res.data.success === false) return rejectWithValue(null);
    return res.data;
  }
);
export const userGetInfo = createAsyncThunk("user/getInfo", async (args, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setLoading(true));
    const res = await getInfo();
    console.log(res);
    dispatch(setLoading(false));
    return res.data;
  } catch (err) {
    dispatch(setLoading(false));
    return rejectWithValue(null);
  }
});

const UserSlice = createSlice({
  name: "user",
  initialState: {} as IUser,
  reducers: {
    userLogout: (state, action) => {
      localStorage.clear();
      return {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLocalLogin.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("refresh_token", payload.refresh_token);
      return payload.user;
    });
    builder.addCase(userLocalLogin.rejected, (state, { payload }) => {});
    builder.addCase(userGetInfo.fulfilled, (state, { payload }) => {
      return payload.user;
    });
    builder.addCase(userGetInfo.rejected, (state, { payload }) => {
      console.log("wrong local token");
    });
    builder.addCase(userGoogleLogin.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("refresh_token", payload.refresh_token);
      return payload.user;
    });
    builder.addCase(userGoogleLogin.rejected, (state, { payload }) => {});
    builder.addCase(userFacebookLogin.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("refresh_token", payload.refresh_token);
      return payload.user;
    });
    builder.addCase(userFacebookLogin.rejected, (state, { payload }) => {});
    builder.addCase(userGithubLogin.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("refresh_token", payload.refresh_token);
      return payload.user;
    });
    builder.addCase(userGithubLogin.rejected, (state, { payload }) => {});
  },
});

const { reducer, actions } = UserSlice;
export const { userLogout } = actions;
export default reducer;
