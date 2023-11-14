interface DayData {
  maxtemp_c: number;
  mintemp_c: number;
  daily_chance_of_rain: number;
}

interface HourData {
  time: string;
  temp_c: number;
  condition: {
    icon: string;
    text: string;
  };
}

interface ForecastDayData {
  day: DayData;
  hour: HourData[];
}

interface LocationData {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

interface CurrentData {
  temp_c: number;
  feelslike_c: number;
  wind_mph: number;
  cloud: number;
  humidity: number;
  condition: {
    text: string;
    icon: string;
  };
}

export interface ForecastData {
  forecastday: ForecastDayData[];
}

export interface MainData {
  location: LocationData;
  current: CurrentData;
}

export interface WeatherData {
  data: {
    location: LocationData;
    current: CurrentData;
    forecast: ForecastData;
  };
}
