import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginSeller,
  logoutSeller,
  getSellerProfile,
  registerSeller,
} from "../../Api/authApi";

// LOGIN
export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginSeller(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);
// REGISTER
export const register = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await registerSeller(formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

// FETCH PROFILE (used for auto login after refresh)
export const fetchSellerProfile = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getSellerProfile();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

// LOGOUT
export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    await logoutSeller();
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    seller: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

    // REGISTER
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
    .addCase(login.fulfilled, (state, action) => {
  state.loading = false;
  state.seller = action.payload.seller; // seller data
  state.isAuthenticated = true;

  // store token in localStorage
  if (action.payload.token) {
    const expiryTime = Date.now() + 5 * 60 * 60 * 1000; // 5 hours
    localStorage.setItem(
      "sellerToken",
      JSON.stringify({ token: action.payload.token, expiry: expiryTime })
    );
  }
})
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // PROFILE CHECK
      .addCase(fetchSellerProfile.fulfilled, (state, action) => {
        state.seller = action.payload;
        state.isAuthenticated = true;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.seller = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;