import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Mosque {
  id: string;
  name: string;
  address: string;
  distance?: string;
  rating?: number;
  reviewCount?: number;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  prayerTimes?: {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
  facilities?: string[];
  images?: string[];
  phone?: string;
  website?: string;
  description?: string;
}

interface MosqueState {
  mosques: Mosque[];
  nearbyMosques: Mosque[];
  popularMosques: Mosque[];
  selectedMosque: Mosque | null;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  filters: {
    distance: number;
    rating: number;
    facilities: string[];
  };
}

const initialState: MosqueState = {
  mosques: [],
  nearbyMosques: [],
  popularMosques: [],
  selectedMosque: null,
  isLoading: false,
  error: null,
  searchQuery: '',
  filters: {
    distance: 10, // km
    rating: 0,
    facilities: [],
  },
};

// Mock data for demonstration
const mockMosques: Mosque[] = [
  {
    id: '1',
    name: 'Central Mosque',
    address: '123 Main Street, City',
    distance: '0.5 km away',
    coordinates: { latitude: 40.7128, longitude: -74.006 },
    rating: 4.5,
    reviewCount: 120,
    facilities: ['Parking', 'Wheelchair Access', 'Library'],
    prayerTimes: {
      fajr: '05:30',
      dhuhr: '12:30',
      asr: '15:45',
      maghrib: '18:15',
      isha: '19:45',
    },
  },
  {
    id: '2',
    name: 'Grand Mosque',
    address: '456 Oak Avenue, City',
    distance: '1.2 km away',
    coordinates: { latitude: 40.7142, longitude: -74.0064 },
    rating: 4.8,
    reviewCount: 89,
    facilities: ['Parking', 'Wheelchair Access', 'Library', 'Cafeteria'],
    prayerTimes: {
      fajr: '05:25',
      dhuhr: '12:25',
      asr: '15:40',
      maghrib: '18:10',
      isha: '19:40',
    },
  },
  {
    id: '3',
    name: 'Community Mosque',
    address: '789 Pine Street, City',
    distance: '2.1 km away',
    coordinates: { latitude: 40.715, longitude: -74.007 },
    rating: 4.2,
    reviewCount: 67,
    facilities: ['Parking', 'Library'],
    prayerTimes: {
      fajr: '05:35',
      dhuhr: '12:35',
      asr: '15:50',
      maghrib: '18:20',
      isha: '19:50',
    },
  },
  {
    id: '4',
    name: 'Islamic Center',
    address: '321 Elm Street, City',
    distance: '0.8 km away',
    coordinates: { latitude: 40.7135, longitude: -74.0055 },
    rating: 4.7,
    reviewCount: 95,
    facilities: [
      'Parking',
      'Wheelchair Access',
      'Library',
      'Cafeteria',
      'Islamic School',
    ],
    prayerTimes: {
      fajr: '05:28',
      dhuhr: '12:28',
      asr: '15:43',
      maghrib: '18:13',
      isha: '19:43',
    },
  },
  {
    id: '5',
    name: 'Masjid Al-Noor',
    address: '654 Maple Avenue, City',
    distance: '1.5 km away',
    coordinates: { latitude: 40.716, longitude: -74.008 },
    rating: 4.4,
    reviewCount: 78,
    facilities: ['Parking', 'Wheelchair Access'],
    prayerTimes: {
      fajr: '05:32',
      dhuhr: '12:32',
      asr: '15:47',
      maghrib: '18:17',
      isha: '19:47',
    },
  },
  {
    id: '6',
    name: 'Jama Masjid',
    address: '987 Oak Street, City',
    distance: '2.8 km away',
    coordinates: { latitude: 40.718, longitude: -74.009 },
    rating: 4.6,
    reviewCount: 112,
    facilities: ['Parking', 'Wheelchair Access', 'Library', 'Cafeteria'],
    prayerTimes: {
      fajr: '05:27',
      dhuhr: '12:27',
      asr: '15:42',
      maghrib: '18:12',
      isha: '19:42',
    },
  },
];

// Async thunks
export const fetchNearbyMosques = createAsyncThunk(
  'mosque/fetchNearbyMosques',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Return all mosques for better map display
      return mockMosques;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch nearby mosques');
    }
  }
);

export const fetchPopularMosques = createAsyncThunk(
  'mosque/fetchPopularMosques',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      return mockMosques.filter((mosque) => mosque.rating! >= 4.5);
    } catch (error: any) {
      return rejectWithValue('Failed to fetch popular mosques');
    }
  }
);

export const fetchMosqueDetails = createAsyncThunk(
  'mosque/fetchMosqueDetails',
  async (mosqueId: string, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      const mosque = mockMosques.find((m) => m.id === mosqueId);
      if (!mosque) {
        throw new Error('Mosque not found');
      }
      return mosque;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch mosque details');
    }
  }
);

export const searchMosques = createAsyncThunk(
  'mosque/searchMosques',
  async (query: string, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (!query.trim()) {
        return mockMosques;
      }
      return mockMosques.filter(
        (mosque) =>
          mosque.name.toLowerCase().includes(query.toLowerCase()) ||
          mosque.address.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error: any) {
      return rejectWithValue('Failed to search mosques');
    }
  }
);

const mosqueSlice = createSlice({
  name: 'mosque',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<Partial<MosqueState['filters']>>
    ) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    selectMosque: (state, action: PayloadAction<Mosque | null>) => {
      state.selectedMosque = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    addMosque: (state, action: PayloadAction<Mosque>) => {
      state.mosques.push(action.payload);
    },
    updateMosque: (state, action: PayloadAction<Mosque>) => {
      const index = state.mosques.findIndex((m) => m.id === action.payload.id);
      if (index !== -1) {
        state.mosques[index] = action.payload;
      }
    },
    removeMosque: (state, action: PayloadAction<string>) => {
      state.mosques = state.mosques.filter((m) => m.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Nearby Mosques
      .addCase(fetchNearbyMosques.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNearbyMosques.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nearbyMosques = action.payload;
        state.error = null;
      })
      .addCase(fetchNearbyMosques.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Fetch Popular Mosques
      .addCase(fetchPopularMosques.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPopularMosques.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularMosques = action.payload;
        state.error = null;
      })
      .addCase(fetchPopularMosques.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Fetch Mosque Details
      .addCase(fetchMosqueDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMosqueDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedMosque = action.payload;
        state.error = null;
      })
      .addCase(fetchMosqueDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Search Mosques
      .addCase(searchMosques.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchMosques.fulfilled, (state, action) => {
        state.isLoading = false;
        state.mosques = action.payload;
        state.error = null;
      })
      .addCase(searchMosques.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setSearchQuery,
  setFilters,
  clearFilters,
  selectMosque,
  clearError,
  addMosque,
  updateMosque,
  removeMosque,
} = mosqueSlice.actions;

export default mosqueSlice.reducer;
