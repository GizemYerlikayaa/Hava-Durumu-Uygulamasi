class WeatherAPI {
  constructor() {
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
    this.apiKEY = "a7d9ad5858d82eeaf9943d8eda56450e";
  }
  async getWeatherInfo(cityName) {
    const response = await fetch(
      `${this.baseURL}?q=${cityName}&appid=${this.apiKEY}&units=metric&lang=tr`
    );
    const data = await response.json();
    return data;
  }
}
