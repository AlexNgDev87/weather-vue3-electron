
export class Weather {
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
}