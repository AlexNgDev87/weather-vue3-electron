
export default class Weather {
    city: string;
    country: string;
    weather: string;
    weatherDescription: string;
    temp: number;
    tempMin: number;
    tempMax: number;
    humidity: string;
    icon: string;

    constructor(city: string, country: string, weather: string,
        weatherDescription: string, temp: number, tempMin: number, tempMax: number, humidity: string, icon: string) {

        this.city = city;
        this.country = country;
        this.weather = weather;
        this.weatherDescription = weatherDescription;
        this.temp = temp;
        this.tempMin = tempMin;
        this.tempMax = tempMax;
        this.humidity = humidity;
        this.icon = icon;
    }




    /*
    this.city = response.data.name;
            this.country = response.data.sys.country;
            this.weatherDescription = response.data.weather[0].description;
            this.temp = response.data.main.temp;
            this.tempMin = response.data.main.temp_min;
            this.tempMax = response.data.main.temp_max;
            this.humidity = response.data.main.humidity;
            this.icon = `http://openweathermap.org/img/w/${
              response.data.weather[0].icon
            }.png`;
            this.error = false;
    */
}