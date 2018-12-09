<template>
    <div class="weather">
        <p>Enter the city name to check current weather in it</p>
        <section class="weather-input">
          <input type="text" v-model="query" placeholder="city" />
          <button :disabled="!query.length" @click="showWeather">Check</button> 
        </section>
        <section v-if="displayWeather" class="weather-result">
          <h1>{{weather.city}}, {{weather.country}}</h1>
          <p><em>{{weather.weatherDescription}}</em></p>
          <div class="weather-result__main">
            <img :src="weather.icon" alt="Weather icon">
            <div class="weather-result__temp">
              {{weather.temp}}&deg;C
            </div>
          </div>
          <div class="weather-result__details">
            <p>Min: {{weather.tempMin}}&deg;C</p>
            <p>Max: {{weather.tempMax}}&deg;C</p>
            <p>Humidity: {{weather.humidity}}%</p>
          </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Weather } from './weather';
import { weatherService } from './weather.service';

@Component
export default class WeatherPage extends Vue {
    weather: Weather | null = null;
    query: string = '';
    displayWeather: boolean = false;
    
    showWeather() {
      weatherService.getWeather(this.query)
        .then((response) => {
          if (this.weather === null) 
            this.weather = this.cloneIt();

          this.weather.city = response.data.name;
          this.weather.country = response.data.sys.country;
          this.weather.weatherDescription = response.data.weather[0].description;
          this.weather.temp = response.data.main.temp;
          this.weather.tempMin = response.data.main.temp_min;
          this.weather.tempMax = response.data.main.temp_max;
          this.weather.humidity = response.data.main.humidity;
          this.weather.icon = `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`;

          this.displayWeather = true;
        });
    }

    cloneIt() {
      return Object.assign({}, this.weather);
    }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px;
  background: rgb(212, 228, 239);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(212, 228, 239, 1) 0%,
    rgba(134, 174, 204, 1) 100%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(212, 228, 239, 1) 0%,
    rgba(134, 174, 204, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(212, 228, 239, 1) 0%,
    rgba(134, 174, 204, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.weather-input {
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin: 0 35px;

  input {
    padding-left: 7px;
  }
}
.weather-result {
  text-align: center;

  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  &__details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: dimgray;
  }
}

.weather-error {
  color: red;
  font-weight: bold;
}

input {
  width: 75%;
  outline: none;
  height: 20px;
  font-size: 0.8rem;
}

button {
  display: block;
  width: 25%;
  height: 25px;
  outline: none;
  border-radius: 5px;
  white-space: nowrap;
  margin: 0 10px;
  font-size: 0.8rem;
}
</style>
