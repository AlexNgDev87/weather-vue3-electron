import axios from "axios";
import { Weather } from "./weather";

class WeatherService {
    constructor() {
        console.log("creating new instance of weather.service");
    }

    getWeather(param: string) {
        return axios.get(`/weather?q=${param}&units=metric&&appid=`);
    }
}

export const weatherService = new WeatherService();
