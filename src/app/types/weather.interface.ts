interface IWeatherInfo {
  main: string;
  icon: string;
}

export interface IWeather {
  weather: IWeatherInfo[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name: string;
}
