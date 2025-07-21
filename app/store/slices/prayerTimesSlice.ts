import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface PrayerTime {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

interface PrayerTimesState {
  currentLocation: {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
  } | null;
  prayerTimes: PrayerTime | null;
  nextPrayer: string | null;
  timeUntilNextPrayer: string | null;
  isLoading: boolean;
  error: string | null;
  date: string;
}

const initialState: PrayerTimesState = {
  currentLocation: null,
  prayerTimes: null,
  nextPrayer: null,
  timeUntilNextPrayer: null,
  isLoading: false,
  error: null,
  date: new Date().toISOString().split('T')[0],
};

// Mock prayer times for demonstration
const mockPrayerTimes: PrayerTime = {
  fajr: '05:30',
  sunrise: '06:45',
  dhuhr: '12:30',
  asr: '15:45',
  maghrib: '18:15',
  isha: '19:45',
};

// Helper function to calculate next prayer
const calculateNextPrayer = (prayerTimes: PrayerTime): string => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const prayerTimesArray = [
    { name: 'fajr', time: prayerTimes.fajr },
    { name: 'sunrise', time: prayerTimes.sunrise },
    { name: 'dhuhr', time: prayerTimes.dhuhr },
    { name: 'asr', time: prayerTimes.asr },
    { name: 'maghrib', time: prayerTimes.maghrib },
    { name: 'isha', time: prayerTimes.isha },
  ];

  for (const prayer of prayerTimesArray) {
    const [hours, minutes] = prayer.time.split(':').map(Number);
    const prayerTime = hours * 60 + minutes;

    if (prayerTime > currentTime) {
      return prayer.name;
    }
  }

  return 'fajr'; // If all prayers have passed, next is fajr tomorrow
};

// Helper function to calculate time until next prayer
const calculateTimeUntilNextPrayer = (
  prayerTimes: PrayerTime,
  nextPrayer: string
): string => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const prayerTimeMap: Record<string, string> = {
    fajr: prayerTimes.fajr,
    sunrise: prayerTimes.sunrise,
    dhuhr: prayerTimes.dhuhr,
    asr: prayerTimes.asr,
    maghrib: prayerTimes.maghrib,
    isha: prayerTimes.isha,
  };

  const nextPrayerTime = prayerTimeMap[nextPrayer];
  const [hours, minutes] = nextPrayerTime.split(':').map(Number);
  const nextPrayerMinutes = hours * 60 + minutes;

  let timeDiff = nextPrayerMinutes - currentTime;

  // If next prayer is tomorrow
  if (timeDiff < 0) {
    timeDiff += 24 * 60;
  }

  const hoursDiff = Math.floor(timeDiff / 60);
  const minutesDiff = timeDiff % 60;

  if (hoursDiff > 0) {
    return `${hoursDiff}h ${minutesDiff}m`;
  } else {
    return `${minutesDiff}m`;
  }
};

// Async thunks
export const fetchPrayerTimes = createAsyncThunk(
  'prayerTimes/fetchPrayerTimes',
  async (
    {
      latitude,
      longitude,
      date,
    }: { latitude: number; longitude: number; date?: string },
    { rejectWithValue }
  ) => {
    try {
      // Simulate API call to prayer times service
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would call an API like:
      // const response = await fetch(`https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=2`);
      // const data = await response.json();
      // return data.data.timings;

      return mockPrayerTimes;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch prayer times');
    }
  }
);

export const setLocation = createAsyncThunk(
  'prayerTimes/setLocation',
  async (
    {
      latitude,
      longitude,
      city,
      country,
    }: { latitude: number; longitude: number; city: string; country: string },
    { dispatch }
  ) => {
    dispatch(fetchPrayerTimes({ latitude, longitude }));
    return { latitude, longitude, city, country };
  }
);

const prayerTimesSlice = createSlice({
  name: 'prayerTimes',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    updateNextPrayer: (state) => {
      if (state.prayerTimes) {
        const nextPrayer = calculateNextPrayer(state.prayerTimes);
        const timeUntil = calculateTimeUntilNextPrayer(
          state.prayerTimes,
          nextPrayer
        );

        state.nextPrayer = nextPrayer;
        state.timeUntilNextPrayer = timeUntil;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    setPrayerTimes: (state, action: PayloadAction<PrayerTime>) => {
      state.prayerTimes = action.payload;
      const nextPrayer = calculateNextPrayer(action.payload);
      const timeUntil = calculateTimeUntilNextPrayer(
        action.payload,
        nextPrayer
      );

      state.nextPrayer = nextPrayer;
      state.timeUntilNextPrayer = timeUntil;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Prayer Times
      .addCase(fetchPrayerTimes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPrayerTimes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.prayerTimes = action.payload;
        state.error = null;

        // Calculate next prayer
        const nextPrayer = calculateNextPrayer(action.payload);
        const timeUntil = calculateTimeUntilNextPrayer(
          action.payload,
          nextPrayer
        );

        state.nextPrayer = nextPrayer;
        state.timeUntilNextPrayer = timeUntil;
      })
      .addCase(fetchPrayerTimes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Set Location
      .addCase(setLocation.fulfilled, (state, action) => {
        state.currentLocation = action.payload;
      });
  },
});

export const { setDate, updateNextPrayer, clearError, setPrayerTimes } =
  prayerTimesSlice.actions;

export default prayerTimesSlice.reducer;
