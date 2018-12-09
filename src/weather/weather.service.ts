import axios from "axios";
import { Weather } from "./weather";

class WeatherService {
    constructor() {
        console.log("creating new instance of weather.service");
    }

    getWeather(param: string) {
        return axios.get(`/weather?q=${param}&units=metric&&appid=fe22375bc6bd03bf705742ad7859cab2`);
    }
}

export const weatherService = new WeatherService();
